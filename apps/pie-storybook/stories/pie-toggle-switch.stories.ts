import { html, TemplateResult } from 'lit';
import type { StoryObj as Story } from '@storybook/web-components';
import { PieToggleSwitch, ToggleSwitchProps } from '@justeattakeaway/pie-toggle-switch';
import { StoryMeta } from '../types';

// TODO: Remove this const when other exports from PieToggleSwitch are used on Stories,
// otherwise tree-shaking will get rid of the web component definition
const keptReference = PieToggleSwitch;

type ToggleSwitchStoryMeta = StoryMeta<ToggleSwitchProps>;

const defaultArgs: ToggleSwitchProps = {
};

const toggleSwitchStoryMeta: ToggleSwitchStoryMeta = {
    title: 'Toggle Switch',
    component: 'pie-toggle-switch',
    argTypes: {

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

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: ToggleSwitchProps): TemplateResult => html`
        <pie-toggle-switch/>
        `;

export const Default: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
