import Generator from 'yeoman-generator';
import chalk from 'chalk';
import prompts from './prompts';
import { transformName, isPackageJson } from './utils';
import type { DependencyType, PackageJson, Props } from './types';

export default class extends Generator {
    async getLatestVersion (packageName: string): Promise<string> {
        try {
            const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
            if (!response.ok) {
                throw new Error(`Error fetching version: ${response.statusText}`);
            }
            const data : PackageJson = await response.json() as PackageJson;

            return data.version || 'Version not found';
        } catch (error) {
            console.error(`Error fetching version for ${packageName}: ${error}`);
            return 'Version not found';
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

            const dependencies: { name: string; type: DependencyType }[] = [
                { name: '@justeattakeaway/pie-components-config', type: 'devDependencies' },
                { name: '@justeattakeaway/pie-webc-core', type: 'dependencies' }
            ] as const;

            try {
                dependencies.forEach(async (dep) => {
                    const latestVersion = await this.getLatestVersion(dep.name);

                    console.log(`${dep.name} version: ${latestVersion}`);


                    console.log('packageJson dep type', packageJson[dep.type]);
                    packageJson[dep.type] = {
                        ...(packageJson[dep.type] || {}),
                        [dep.name]: latestVersion,
                    };
                });

                console.log('package.jsonnnnnnnn', packageJson);
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
