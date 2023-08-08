import { html, TemplateResult } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import {
    PieDivider, DividerProps, variants, orientations,
} from '@justeattakeaway/pie-divider';
import { type StoryMeta } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieDivider];

type DividerStoryMeta = StoryMeta<DividerProps>;

const defaultArgs: DividerProps = {
    variant: 'default',
    orientation: 'horizontal',
};

const dividerStoryMeta: DividerStoryMeta = {
    title: 'Divider',
    component: 'pie-divider',
    argTypes: {
        variant: {
            description: 'Set the variant of the divider.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'default',
            },
        },
        orientation: {
            description: 'Set the orientation of the divider.',
            control: 'select',
            options: orientations,
            defaultValue: {
                summary: 'horizontal',
            },
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

export default dividerStoryMeta;

const Template = ({ variant, orientation }: DividerProps): TemplateResult => {
    if (orientation === 'vertical') {
        return html`
            <div style="height: 320px">
                <pie-divider variant="${variant}" orientation="${orientation}" />
            </div>
        `;
    }
    return html`<pie-divider variant="${variant}" orientation="${orientation}" />`;
};

export const Default: Story<DividerProps> = (args: DividerProps) => Template(args);
Default.args = {
    ...defaultArgs,
};

export const Inverse: Story<DividerProps> = (args: DividerProps) => Template(args);
Inverse.args = {
    ...defaultArgs,
    variant: 'inverse',
};

Inverse.parameters = {
    backgrounds: {
        default: 'dark',
    },
};
