import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-divider';
import {
    type DividerProps, variants, orientations, defaultProps,
} from '@justeattakeaway/pie-divider';

import { createStory, type TemplateFunction } from '../utilities';

type DividerStoryMeta = Meta<DividerProps>;

const defaultArgs: DividerProps = { ...defaultProps };

const dividerStoryMeta: DividerStoryMeta = {
    title: 'Components/Divider',
    component: 'pie-divider',
    argTypes: {
        variant: {
            description: 'Set the variant of the divider. To change this, view the other story.',
            control: { disable: true },
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        label: {
            description: 'The label text for the divider.',
            control: {
                type: 'text',
                defaultValue: {
                    summary: 'Label',
                },
            },
        },
        orientation: {
            description: 'Set the orientation of the divider.',
            control: 'select',
            options: orientations,
            defaultValue: {
                summary: defaultProps.orientation,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?node-id=876-1227&node-type=CANVAS&t=v6qypWzZqWE6lPxm-0',
        },
    },
};

export default dividerStoryMeta;

const Template : TemplateFunction<DividerProps> = ({ variant, label, orientation }) => html`
            <div style="${orientation === 'horizontal' ? 'width' : 'height'}: 400px">
                <pie-divider variant="${ifDefined(variant)}" orientation="${ifDefined(orientation)}" label="${ifDefined(label)}"></pie-divider>
            </div>
        `;

const createDividerStory = createStory<DividerProps>(Template, defaultArgs);

export const Default = createDividerStory();
export const Inverse = createDividerStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const Labelled = createDividerStory({ label: 'Label' });
export const LargeTextContent = createDividerStory({ label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas inventore quasi ullam, sed ab odio dicta, tempore' });
