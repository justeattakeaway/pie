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
            .aria="${aria}">
            <icon-close></icon-close>
        </pie-icon-button>
        `;

const createIconButtonStory = createStory<IconButtonProps>(Template, defaultArgs);

export const Default = createIconButtonStory();

const sharedVariantProps : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    disabled: [true, false],
    isLoading: [true, false],
    aria: [{ label: 'qux' }],
};

const primaryVariantProps : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedVariantProps,
    variant: ['primary'],
};

const secondaryVariantProps : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedVariantProps,
    variant: ['secondary'],
};

const outlineVariantProps : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedVariantProps,
    variant: ['outline'],
};

const ghostVariantProps : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedVariantProps,
    variant: ['ghost'],
};

const ghostSecondaryVariantProps : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedVariantProps,
    variant: ['ghost-secondary'],
};

const inverseVariantProps : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedVariantProps,
    variant: ['inverse'],
};

const ghostInverseVariantProps : Partial<Record<keyof IconButtonProps, unknown[]>> = {
    ...sharedVariantProps,
    variant: ['ghost-inverse'],
};

export const PrimaryVariants = createVariantStory<IconButtonProps>(Template, primaryVariantProps);
export const SecondaryVariants = createVariantStory<IconButtonProps>(Template, secondaryVariantProps);
export const OutlineVariants = createVariantStory<IconButtonProps>(Template, outlineVariantProps, { bgColor: 'background-subtle' });
export const GhostVariants = createVariantStory<IconButtonProps>(Template, ghostVariantProps, { bgColor: 'background-subtle' });
export const GhostSecondaryVariants = createVariantStory<IconButtonProps>(Template, ghostSecondaryVariantProps, { bgColor: 'background-subtle' });
export const InverseVariants = createVariantStory<IconButtonProps>(Template, inverseVariantProps, { bgColor: 'dark (container-dark)' });
export const GhostInverseVariants = createVariantStory<IconButtonProps>(Template, ghostInverseVariantProps, { bgColor: 'dark (container-dark)' });
