import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-spinner';
import {
    type SpinnerProps, sizes, variants, defaultProps,
} from '@justeattakeaway/pie-spinner';

import { type TemplateFunction, createStory, createVariantStory } from '../../utilities';

type SpinnerStoryMeta = Meta<SpinnerProps>;

const defaultArgs: SpinnerProps = {
    ...defaultProps,
    aria: {
        label: 'Please wait',
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

const sharedPropsMatrix : Partial<Record<keyof SpinnerProps, unknown[]>> = {
    size: [...sizes],

};

const brandPropsMatrix : Partial<Record<keyof SpinnerProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['brand'],
};

const secondaryPropsMatrix : Partial<Record<keyof SpinnerProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['secondary'],
};

const secondaryDarkPropsMatrix : Partial<Record<keyof SpinnerProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['secondary-dark'],
};

const inversePropsMatrix : Partial<Record<keyof SpinnerProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['inverse'],
};

const inverseLightPropsMatrix : Partial<Record<keyof SpinnerProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['inverse-light'],
};

export const BrandVariations = createVariantStory<SpinnerProps>(Template, brandPropsMatrix);
export const SecondaryVariations = createVariantStory<SpinnerProps>(Template, secondaryPropsMatrix);
export const SecondaryDarkVariations = createVariantStory<SpinnerProps>(Template, secondaryDarkPropsMatrix);
export const InverseVariations = createVariantStory<SpinnerProps>(Template, inversePropsMatrix, { bgColor: 'dark (container-dark)' });
export const InverseLightVariations = createVariantStory<SpinnerProps>(Template, inverseLightPropsMatrix, { bgColor: 'dark (container-dark)' });
