import { html, nothing } from 'lit';
import { PieSwitch, SwitchProps, labelPlacements } from '@justeattakeaway/pie-switch';
import { IconCheck } from '@justeattakeaway/pie-icons-webc';
import { StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [
    IconCheck,
    PieSwitch,
];

type SwitchStoryMeta = StoryMeta<SwitchProps>;

const defaultArgs: SwitchProps = {
    isChecked: false,
    isDisabled: false,
    label: 'Label',
    labelPlacement: 'leading',
    aria: {
        label: 'switch label',
        describedBy: 'switch description',
    },
};

const switchStoryMeta: SwitchStoryMeta = {
    title: 'Switch',
    component: 'pie-switch',
    argTypes: {
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
        label: {
            description: 'The label text for the switch',
            control: {
                type: 'text',
                defaultValue: {
                    summary: 'Label',
                },
            },
        },
        labelPlacement: {
            description: 'Set the placement of the label.',
            control: 'select',
            if: { arg: 'label', truthy: true },
            options: labelPlacements,
            defaultValue: {
                summary: 'leading',
            },
        },
        aria: {
            description: 'The ARIA labels used for the switch.',
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

export default switchStoryMeta;

const Template : TemplateFunction<SwitchProps> = (props) => {
    const {
        aria,
        isChecked,
        isDisabled,
        label,
        labelPlacement,
    } = props;

    return html`
        <pie-switch
            label="${label || nothing}"
            labelPlacement="${label && labelPlacement ? labelPlacement : nothing}"
            .aria="${aria}"
            ?isChecked="${isChecked}"
            ?isDisabled="${isDisabled}">
        </pie-switch>`;
};

const createSwitchStory = createStory(Template, defaultArgs);

export const Default = createSwitchStory();
