import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-divider';
import { DividerProps, variants, orientations } from '@justeattakeaway/pie-divider';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

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

const Template : TemplateFunction<DividerProps> = ({ variant, orientation }) => {
    if (orientation === 'vertical') {
        return html`
            <div style="height: 250px">
                <pie-divider variant="${variant}" orientation="${orientation}"></pie-divider>
            </div>
        `;
    }
    return html`<pie-divider variant="${variant}" orientation="${orientation}" />`;
};

const createDividerStory = createStory<DividerProps>(Template, defaultArgs);

export const Default = createDividerStory();
export const Inverse = createDividerStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
