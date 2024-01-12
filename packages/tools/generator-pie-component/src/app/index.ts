import Generator from 'yeoman-generator';
import chalk from 'chalk';
import prompts from './prompts';
import { transformName, isPackageJson } from './utils';
import type { DependencyType, NpmRegistryResponse, PackageJson, Props } from './types';

export default class extends Generator {
    async getLatestVersion (packageName: string): Promise<string | null> {
        try {
            const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
            if (!response.ok) {
                throw new Error(`Error fetching version: ${response.statusText}`);
            }
            const data : NpmRegistryResponse = await response.json();
            return data.version;
        } catch (error) {
            console.error(`Error fetching version for ${packageName}: ${error}`);
            return null;
        }
    }

    props: Props;

    async initializing () {
        this.log(chalk`A Yeoman generator for Pie Web Components`);
    }

    async prompting () {
        const answers = await this.prompt(prompts);
        const transformedName = transformName(answers.name);
        this.props = {
            ...answers,
            ...transformedName,
            componentPath: `packages/components/pie-${transformedName.fileName}/`,
            storyPath: answers.storybookStoryDirectory,
        };
    }

    async writing () {
        const { fileName, componentPath, storyPath } = this.props;
        const processDestinationPath = (filePath: string) => filePath.replace(/\b(placeholder)\b/g, fileName).replace(/__/g, '');

        this.fs.copyTpl(
            this.templatePath('**/*'),
            this.destinationPath(componentPath),
            this.props,
            undefined,
            {
                globOptions: { dot: true, ignore: ['**/pie-placeholder.__stories__.ts'] },
                processDestinationPath,
            },
        );

        this.fs.copyTpl(
            this.templatePath('**/pie-placeholder.__stories__.ts'),
            this.destinationPath(storyPath),
            this.props,
            undefined,
            { processDestinationPath },
        );

        const packageJsonPath = this.destinationPath(`${componentPath}/package.json`);
        const packageJsonContent = this.fs.readJSON(packageJsonPath);

        if (packageJsonContent && isPackageJson(packageJsonContent)) {
            const packageJson: PackageJson = packageJsonContent;

            // Initialize dependencies, devDependencies, and peerDependencies if they don't exist
            packageJson.dependencies = packageJson.dependencies || {};
            packageJson.devDependencies = packageJson.devDependencies || {};
            packageJson.peerDependencies = packageJson.peerDependencies || {};

            const dependencies: { name: string; type: DependencyType }[] = [
                { name: '@justeattakeaway/pie-components-config', type: 'devDependencies' },
                { name: '@justeattakeaway/pie-webc-core', type: 'dependencies' }
            ] as const;

            try {
                const latestVersions = await Promise.all(dependencies.map((dep) => this.getLatestVersion(dep.name)));

                latestVersions.forEach((version, index) => {
                    const dep = dependencies[index];
                    if (!version) {
                        throw new Error(`Failed to fetch the latest version of ${dep.name}`);
                    }

                    // Ensure the dependency object exists
                    if (!packageJson[dep.type]) {
                        packageJson[dep.type] = {};
                    }

                    packageJson[dep.type][dep.name] = version;
                });

                this.fs.writeJSON(packageJsonPath, packageJson);
            } catch (error) {
                throw new Error(`An error occurred while fetching dependencies: ${error}`);
            }
        } else {
            throw new Error('package.json not found or is in an unexpected format');
        }
    }

    async end () {
        this.log(chalk`Your component has been created at ${this.props.componentPath}`);
    }
}
