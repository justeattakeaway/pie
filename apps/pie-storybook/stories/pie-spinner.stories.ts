import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/spinner';
import {
    type SpinnerProps, sizes, variants, defaultProps,
} from '@justeattakeaway/pie-webc/components/spinner';

import { type TemplateFunction, createStory } from '../utilities';

type SpinnerStoryMeta = Meta<SpinnerProps>;

const defaultArgs: SpinnerProps = {
    ...defaultProps,
    aria: {
        label: 'Loading',
    },
};

const spinnerStoryMeta: SpinnerStoryMeta = {
    title: 'Components/Spinner',
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
        isCentered: {
            description: 'When true, positions the spinner absolutely and centers it within its nearest relative ancestor.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isCentered,
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

export default spinnerStoryMeta;

const Template: TemplateFunction<SpinnerProps> = ({
    size,
    variant,
    aria,
    isCentered,
}) => html`
        <pie-spinner
            size="${ifDefined(size)}"
            variant="${ifDefined(variant)}"
            ?isCentered="${isCentered}"
            .aria="${aria}">
        </pie-spinner>`;

const createSpinnerStory = createStory<SpinnerProps>(Template, defaultArgs);

export const Brand = createSpinnerStory();
export const Secondary = createSpinnerStory({ variant: 'secondary' });
export const SecondaryDark = createSpinnerStory({ variant: 'secondary-dark' });
export const Inverse = createSpinnerStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const InverseLight = createSpinnerStory({ variant: 'inverse-light' }, { bgColor: 'dark (container-dark)' });
