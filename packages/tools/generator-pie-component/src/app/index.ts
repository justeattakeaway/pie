import Generator from 'yeoman-generator';
import chalk from 'chalk';

import { transformName } from './utils';
import type { Props } from './types';

export default class extends Generator {
    props: Props;

    async initializing () {
        this.log(chalk`A Yeoman generator for Pie Web Components`);
    }

    async prompting () {
        const answers = await this.prompt([{
            message: "What's the name of your new component (without the 'pie-' prefix e.g. 'form-label')?",
            name: 'name',
            type: 'input',
        }]);
        const transformedName = transformName(answers.name);
        this.props = {
            answers,
            ...transformedName,
            componentPath: `packages/components/pie-${transformedName.fileName}/`,
            storyPath: 'apps/pie-storybook/stories/',
        };
    }

    async writing () {
        const { fileName, componentPath, storyPath } = this.props;
        const processDestinationPath = (filePath: string) => filePath.replace(/\b(component)\b/g, fileName).replace(/__/g, '');

        this.fs.copyTpl(
            this.templatePath('**/*'),
            this.destinationPath(componentPath),
            this.props,
            undefined,
            {
                globOptions: { dot: true, ignore: ['**/component.__stories__.ts'] },
                processDestinationPath,
            },
        );

        this.fs.copyTpl(
            this.templatePath('**/component.__stories__.ts'),
            this.destinationPath(storyPath),
            this.props,
            undefined,
            { processDestinationPath },
        );
    }

    async end () {
        this.log(chalk`Your component has been created at ${this.props.componentPath}`);
    }
}
