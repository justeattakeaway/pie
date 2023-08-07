import { html, TemplateResult } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import { PieToggleSwitch } from '@justeattakeaway/pie-toggle-switch';
import { ToggleSwitchProps } from '@justeattakeaway/pie-toggle-switch/src/defs';
import { IconCheck } from '@justeattakeaway/pie-icons-webc';
import { StoryMeta } from '../types';
import { i18nArgTypes } from '../args/commonArgsTypes';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [
    IconCheck,
    PieToggleSwitch,
];

type ToggleSwitchStoryMeta = StoryMeta<ToggleSwitchProps>;

const defaultArgs: ToggleSwitchProps = {
    isChecked: false,
    isDisabled: false,
    dir: 'ltr',
    aria: {
        label: 'toggle switch label',
        describedBy: 'toggle switch description',
    },
};

const toggleSwitchStoryMeta: ToggleSwitchStoryMeta = {
    title: 'Toggle Switch',
    component: 'pie-toggle-switch',
    argTypes: {
        ...i18nArgTypes,
        isChecked: {
            description: 'Same as the HTML checked attribute - indicates whether the switch is on or off',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isDisabled: {
            description: 'Same as the HTML disabled attribute - indicates whether the switch is disabled or not',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        aria: {
            description: 'The ARIA labels used for the toggle-switch.',
            control: 'object',
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
        aria,
        isChecked,
        isDisabled,
        dir,
    } = props;

    return html`
        <pie-toggle-switch
            ?isChecked=${isChecked}
            ?isDisabled=${isDisabled}
            .aria=${aria}
            dir="${dir}"></pie-toggle-switch>`;
};

export const Default: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
