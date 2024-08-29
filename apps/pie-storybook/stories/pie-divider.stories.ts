import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-divider';
import {
    DividerProps, variants, orientations, defaultProps,
} from '@justeattakeaway/pie-divider';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type DividerStoryMeta = StoryMeta<DividerProps>;

const defaultArgs: DividerProps = { ...defaultProps };

const dividerStoryMeta: DividerStoryMeta = {
    title: 'Divider',
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
        slot: {
            description: 'Content to place within the divider.',
            control: 'text',
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

const Template : TemplateFunction<DividerProps> = ({ variant, slot, orientation }) => html`
            <div style="${orientation === 'horizontal' ? 'width' : 'height'}: 400px">
                <pie-divider variant="${ifDefined(variant)}" orientation="${ifDefined(orientation)}">${sanitizeAndRenderHTML(slot)}</pie-divider>
            </div>
        `;

const createDividerStory = createStory<DividerProps>(Template, defaultArgs);

export const Default = createDividerStory();
export const Inverse = createDividerStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const Labelled = createDividerStory({ slot: 'Label' });
