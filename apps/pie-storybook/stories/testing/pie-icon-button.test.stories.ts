import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-icon-button';
import {
    type IconButtonProps, sizes, variants, defaultProps,
} from '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';

import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';

type IconButtonStoryMeta = Meta<IconButtonProps>;

const defaultArgs: IconButtonProps = { ...defaultProps, aria: { label: 'Test Label ' } };

const iconButtonStoryMeta: IconButtonStoryMeta = {
    title: 'Icon Button',
    component: 'pie-icon-button',
    argTypes: {
        aria: {
            description: 'The ARIA attributes available to use on the icon button. Offers `label`, `labelledby`, `describedby`, `expanded` and `controls`.',
            control: 'object',
        },
        size: {
            description: 'Set the size of the icon button.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        variant: {
            description: 'Set the variant of the icon button.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        disabled: {
            description: 'If `true`, disables the icon button.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the icon button.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isLoading,
            },
        },
    },
    args: defaultArgs,
};

export default iconButtonStoryMeta;

const Template : TemplateFunction<IconButtonProps> = ({
    size,
    variant,
    disabled,
    isLoading,
    aria,
}) => html`
        <pie-icon-button
            size="${ifDefined(size)}"
            variant="${ifDefined(variant)}"
            ?disabled="${disabled}"
            ?isLoading="${isLoading}"
            .aria="${aria}"
            @click="${handleClick}">
            <icon-close></icon-close>
        </pie-icon-button>
        `;

const handleClick = () => {
    console.info('Native event dispatched');
};

const createIconButtonStory = createStory<IconButtonProps>(Template, defaultArgs);

export const Default = createIconButtonStory();

const sharedPropsMatrix : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    disabled: [true, false],
    isLoading: [true, false],
    size: [...sizes],
};

const primaryVariantPropsMatrix : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['primary'],
};

const secondaryVariantPropsMatrix : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['secondary'],
};

const outlineVariantPropsMatrix : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['outline'],
};

const ghostVariantPropsMatrix : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['ghost'],
};

const ghostSecondaryVariantPropsMatrix : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['ghost-secondary'],
};

const inverseVariantPropsMatrix : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['inverse'],
};

const ghostInverseVariantPropsMatrix : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedPropsMatrix,
    variant: ['ghost-inverse'],
};

export const PrimaryVariations = createVariantStory<IconButtonProps>(Template, primaryVariantPropsMatrix);
export const SecondaryVariations = createVariantStory<IconButtonProps>(Template, secondaryVariantPropsMatrix);
export const OutlineVariations = createVariantStory<IconButtonProps>(Template, outlineVariantPropsMatrix, { bgColor: 'background-subtle' });
export const GhostVariations = createVariantStory<IconButtonProps>(Template, ghostVariantPropsMatrix, { bgColor: 'background-subtle' });
export const GhostSecondaryVariations = createVariantStory<IconButtonProps>(Template, ghostSecondaryVariantPropsMatrix, { bgColor: 'background-subtle' });
export const InverseVariations = createVariantStory<IconButtonProps>(Template, inverseVariantPropsMatrix, { bgColor: 'dark (container-dark)' });
export const GhostInverseVariations = createVariantStory<IconButtonProps>(Template, ghostInverseVariantPropsMatrix, { bgColor: 'dark (container-dark)' });
