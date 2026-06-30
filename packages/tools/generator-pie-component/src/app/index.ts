import Generator from 'yeoman-generator';
import chalk from 'chalk';
import YAML from 'yaml';
import type { Document } from 'yaml';
import fs from 'fs';

import prompts from './prompts';
import { transformName } from './utils';
import type { Props } from './types';

export default class extends Generator {
    props: Props;

    async initializing () {
        this.log(chalk.hex('#f36805')('Starting PIE web component generator...'));
    }

    async prompting () {
        const answers = await this.prompt(prompts);
        const transformedName = transformName(answers.name);
        this.props = {
            ...answers,
            ...transformedName,
            componentPath: `packages/components/pie-${transformedName.fileName}/`,
            storyPath: 'apps/pie-storybook/stories/',
            testStoryPath: 'apps/pie-storybook/stories/testing/',
        };
    }

    _readWorkspacePackageVersion (relativePath: string): string {
        try {
            const content = fs.readFileSync(this.destinationPath(relativePath), 'utf-8');
            return JSON.parse(content).version as string;
        } catch {
            return '0.0.0';
        }
    }

    async writing () {
        const {
            fileName, componentPath, storyPath, testStoryPath,
        } = this.props;

        const workspaceDeps = {
            pieComponentsConfigVersion: this._readWorkspacePackageVersion('configs/pie-components-config/package.json'),
            pieCssVersion: this._readWorkspacePackageVersion('packages/tools/pie-css/package.json'),
            pieWebcCoreVersion: this._readWorkspacePackageVersion('packages/components/pie-webc-core/package.json'),
            pieMonorepoUtilsVersion: this._readWorkspacePackageVersion('packages/tools/pie-monorepo-utils/package.json'),
        };

        // Copy all component files that don't need path renaming.
        // processDestinationPath was removed in mem-fs-editor v12 / yeoman-generator v8,
        // so files whose names contain "placeholder" or "__" are excluded here and
        // copied individually below with explicit renamed destination paths.
        this.fs.copyTpl(
            this.templatePath('**/*'),
            this.destinationPath(componentPath),
            this.props,
            undefined,
            {
                globOptions: {
                    dot: true,
                    ignore: [
                        '**/pie-placeholder.__stories__.ts',
                        '**/pie-placeholder.mdx',
                        '**/pie-placeholder.__test__.__stories__.ts',
                        '**/__package__.json',
                        '**/placeholder.scss',
                        '**/pie-placeholder.__spec__.ts',
                    ],
                },
            },
        );

        // Component files that need renaming
        this.fs.copyTpl(
            this.templatePath('__package__.json'),
            this.destinationPath(`${componentPath}package.json`),
            { ...this.props, ...workspaceDeps },
        );
        this.fs.copyTpl(
            this.templatePath('src/placeholder.scss'),
            this.destinationPath(`${componentPath}src/${fileName}.scss`),
            this.props,
        );
        this.fs.copyTpl(
            this.templatePath('test/accessibility/pie-placeholder.__spec__.ts'),
            this.destinationPath(`${componentPath}test/accessibility/pie-${fileName}.spec.ts`),
            this.props,
        );
        this.fs.copyTpl(
            this.templatePath('test/component/pie-placeholder.__spec__.ts'),
            this.destinationPath(`${componentPath}test/component/pie-${fileName}.spec.ts`),
            this.props,
        );
        this.fs.copyTpl(
            this.templatePath('test/visual/pie-placeholder.__spec__.ts'),
            this.destinationPath(`${componentPath}test/visual/pie-${fileName}.spec.ts`),
            this.props,
        );

        // Storybook files
        this.fs.copyTpl(
            this.templatePath('pie-placeholder.__stories__.ts'),
            this.destinationPath(`${storyPath}pie-${fileName}.stories.ts`),
            this.props,
        );
        this.fs.copyTpl(
            this.templatePath('pie-placeholder.__test__.__stories__.ts'),
            this.destinationPath(`${testStoryPath}pie-${fileName}.test.stories.ts`),
            this.props,
        );
        this.fs.copyTpl(
            this.templatePath('pie-placeholder.mdx'),
            this.destinationPath(`${storyPath}pie-${fileName}.mdx`),
            this.props,
        );

        // Update YAML and config files
        this._addPercyTokenEnvVar();
        this._addGithubLabel();
        this._addBundlewatchConfigEntry();
    }

    _readAndParseYaml (filePath: string): Document {
        const yamlSrc = this.fs.read(filePath);
        return YAML.parseDocument(yamlSrc);
    }

    /**
     * In this method we intentionally bypass Yeomans standard behaviour of asking confirmation for every file update
     */
    _stringifyYamlAndWriteFile (filePath:string, yamlDoc:Document) {
        const yamlStr = yamlDoc.toString({ lineWidth: 0 });
        fs.writeFileSync(filePath, yamlStr, { encoding: 'utf-8' });
    }

    /**
     * Add placeholder Percy token environment variable to ci.yml
     */
    _addPercyTokenEnvVar () {
        const { percyComponentName } = this.props;
        const yamlFilePath = this.destinationPath('.github/workflows/ci.yml');

        // Read file
        const yamlDoc:Document = this._readAndParseYaml(yamlFilePath);

        // Add env value
        const key = `PERCY_TOKEN_PIE_${percyComponentName}`;
        const value = `\${{ secrets.${key} }}`;
        yamlDoc.setIn(['env', key], value);

        this.log(chalk('Updating ci.yml...'));

        // Update YAML file bypassing Yeoman fs implementation
        // For convenience sake, in this particular update, we opt out of yeoman fs implementation
        // as the udate is part of the automation
        this._stringifyYamlAndWriteFile(yamlFilePath, yamlDoc);
    }

    _addGithubLabel () {
        const { fileName } = this.props;
        const yamlFilePath = this.destinationPath('.github/project-labeler.yml');

        // Read file
        const yamlDoc:Document = this._readAndParseYaml(yamlFilePath);

        // Add new entry
        yamlDoc.set(`pie-${fileName}`, [`packages/components/pie-${fileName}/**/*`]);

        this.log(chalk('Updating project-labeler.yml...'));

        // Update YAML file bypassing Yeoman fs implementation
        // For convenience sake, in this particular update, we opt out of yeoman fs implementation
        // as the udate is part of the automation
        this._stringifyYamlAndWriteFile(yamlFilePath, yamlDoc);
    }

    _addBundlewatchConfigEntry () {
        const { fileName } = this.props;
        const configPath = this.destinationPath('bundlewatch.config.json');

        // Read and parse the existing config
        let bundlewatchConfig;
        try {
            const configContent = fs.readFileSync(configPath, 'utf-8');
            bundlewatchConfig = JSON.parse(configContent);
        } catch (error) {
            this.log(chalk.red(`Error reading bundlewatch config: ${error.message}`));
            return;
        }

        // Add the new component entry
        const newEntry = {
            path: `./packages/components/pie-${fileName}/dist/*.js`,
            maxSize: '3 KB',
        };
        bundlewatchConfig.files.push(newEntry);

        // Write the updated config back to the file
        try {
            fs.writeFileSync(configPath, JSON.stringify(bundlewatchConfig, null, 2), 'utf-8');
            this.log(chalk.green('Updated bundlewatch.config.json with new component.'));
        } catch (error) {
            this.log(chalk.red(`Error writing to bundlewatch config: ${error.message}`));
        }
    }

    async end () {
        // spawnCommandSync in yeoman-generator v8 takes (fullCommandString, options) — not (command, args, options).
        this.log(chalk('Updating pie-webc...'));
        this.spawnCommandSync('yarn add-components');

        this.log(chalk('Updating lock file...'));
        this.spawnCommandSync('yarn', { cwd: this.destinationPath() });

        this.log(chalk.greenBright('Your new component has been created!'));
    }
}
