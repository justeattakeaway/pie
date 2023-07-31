import { html, TemplateResult } from 'lit';
import type { StoryObj as Story } from '@storybook/web-components';
import '@justeattakeaway/pie-toggle-switch';
import { ToggleSwitchProps } from '@justeattakeaway/pie-toggle-switch/src/defs';
import { StoryMeta } from '../types';
import '@justeattakeaway/pie-icons-webc/icons/IconCheck'; // Register icon-check

type ToggleSwitchStoryMeta = StoryMeta<ToggleSwitchProps>;

const defaultArgs: ToggleSwitchProps = {
    isChecked: true,
};

const toggleSwitchStoryMeta: ToggleSwitchStoryMeta = {
    title: 'Toggle Switch',
    component: 'pie-toggle-switch',
    argTypes: {
        isChecked: {
            description: 'Same as the HTML checked attribute - indicates whether the switch is on or off',
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
    const { isChecked } = props;

    return html`
        <pie-toggle-switch ?checked=${isChecked}></pie-toggle-switch>
        `;
};

export const Default: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
