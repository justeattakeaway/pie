import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-spinner';
import {
    type SpinnerProps, sizes, variants, defaultProps,
} from '@justeattakeaway/pie-spinner';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { type TemplateFunction, createStory } from '../utilities';

type SpinnerStoryMeta = StoryMeta<SpinnerProps>;

const defaultArgs: SpinnerProps = {
    ...defaultProps,
    aria: {
        label: 'Loading',
    },
};

const spinnerStoryMeta: SpinnerStoryMeta = {
    title: 'Spinner',
    component: 'pie-spinner',
    argTypes: {
        size: {
            description: 'Set the size of the spinner.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        variant: {
            description: 'Set the variant of the spinner.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        aria: {
            description: 'The ARIA labels used for the spinner.',
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

export default spinnerStoryMeta;

const Template: TemplateFunction<SpinnerProps> = ({
    size,
    variant,
    aria,
}) => html`
        <pie-spinner
            size="${ifDefined(size)}"
            variant="${ifDefined(variant)}"
            .aria="${aria}">
        </pie-spinner>`;

const createSpinnerStory = createStory<SpinnerProps>(Template, defaultArgs);

export const Brand = createSpinnerStory();
export const Secondary = createSpinnerStory({ variant: 'secondary' });
export const Inverse = createSpinnerStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
