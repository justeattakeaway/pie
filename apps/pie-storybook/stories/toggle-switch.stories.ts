import { html, TemplateResult } from 'lit';
import type { StoryObj as Story } from '@storybook/web-components';
import '@justeattakeaway/pie-toggle-switch';
import { ToggleSwitchProps } from '@justeattakeaway/pie-toggle-switch/src/defs';
import { StoryMeta } from '../types';
import { i18nArgTypes } from '../args/commonArgsTypes';
import '@justeattakeaway/pie-icons-webc/icons/IconCheck'; // Register icon-check

type ToggleSwitchStoryMeta = StoryMeta<ToggleSwitchProps>;

const defaultArgs: ToggleSwitchProps = {
    isChecked: false,
    isDisabled: false,
    dir: 'ltr',
};

const toggleSwitchStoryMeta: ToggleSwitchStoryMeta = {
    title: 'Toggle Switch',
    component: 'pie-toggle-switch',
    argTypes: {
        ...i18nArgTypes,
        isChecked: {
            description: 'Same as the HTML checked attribute - indicates whether the switch is on or off',
            control: 'boolean',
        },
        isDisabled: {
            description: 'Same as the HTML checked attribute - indicates whether the switch disabled or not',
            control: 'boolean',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default toggleSwitchStoryMeta;

const Template = (props: ToggleSwitchProps): TemplateResult => {
    const {
        isChecked,
        isDisabled,
        dir,
    } = props;

    return html`
        <pie-toggle-switch
            ?isChecked=${isChecked}
            ?isDisabled=${isDisabled}
            dir="${dir}"></pie-toggle-switch>`;
};

export const Default: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
