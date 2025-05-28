import Generator from 'yeoman-generator';
import chalk from 'chalk';
import YAML from 'yaml';
import type { Document } from 'yaml';
import fs from 'fs';

import prompts from './prompts';
import { transformName } from './utils';
import type { Props } from './types';

// Regex as string used to restrict package upgrades after scaffolding
const packagesToUpgrade = '/^@justeattakeaway//';

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

    async writing () {
        const {
            fileName, componentPath, storyPath, testStoryPath,
        } = this.props;
        const processDestinationPath = (filePath: string) => filePath.replace(/\b(placeholder)\b/g, fileName).replace(/__/g, '');

        this.fs.copyTpl(
            this.templatePath('**/*'),
            this.destinationPath(componentPath),
            this.props,
            undefined,
            {
                globOptions: { dot: true, ignore: ['**/pie-placeholder.__stories__.ts', '**/pie-placeholder.mdx'] },
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

        this.fs.copyTpl(
            this.templatePath('**/pie-placeholder.__test__.__stories__.ts'),
            this.destinationPath(testStoryPath),
            this.props,
            undefined,
            { processDestinationPath },
        );

        this.fs.copyTpl(
            this.templatePath('**/pie-placeholder.mdx'),
            this.destinationPath(storyPath),
            this.props,
            undefined,
            { processDestinationPath },
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
        const { componentPath, defaultName } = this.props;

        this.log(chalk('Updating pie-webc...'));
        this.spawnCommandSync('npx', ['add-components']);

        this.log(chalk('Checking for package updates...'));
        this.spawnCommandSync('npx', ['npm-check-updates', '-u', packagesToUpgrade], { cwd: this.destinationPath(componentPath) });

        this.log(chalk('Updating pie-storybook...'));
        const packageNameVersion = `@justeattakeaway/pie-${defaultName}@0.0.0`;
        this.spawnCommandSync('yarn', ['add', packageNameVersion], { cwd: this.destinationPath('apps/pie-storybook/') });

        this.log(chalk('Updating lock file...'));
        this.spawnCommandSync('yarn', [], { cwd: this.destinationPath() });

        this.log(chalk.greenBright('Your new component has been created!'));
    }
}
