import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const sizes = ['xsmall', 'small', 'medium', 'large'] as const;
export const variants = ['primary', 'primary-alternative', 'primary-alternative-dark', 'secondary', 'outline', 'ghost',
    'ghost-secondary', 'inverse', 'ghost-inverse', 'translucent'] as const;

type AriaProps = {
    label?: string;
    labelledby?: string;
    describedby?: string;
    expanded?: boolean;
    controls?: string;
};

export interface IconButtonProps {
    /**
     * The ARIA attributes available to use on the icon button. Offers label, labelledby, describedby, expanded and controls.
     */
    aria?: AriaProps;

    /**
     * (Optional) What size the button should be.
     * @default "medium"
     */
    size?: typeof sizes[number];
    /**
     * (Optional) What style variant the button should be such as primary, outline or ghost.
     * @default "primary"
     */
    variant?: typeof variants[number];
    /**
     * (Optional) When true, the button element is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * (Optional) When true, a loading spinner is rendered.
     * @default false
     */
    isLoading?: boolean;
}

export type DefaultProps = ComponentDefaultProps<IconButtonProps, keyof Omit<IconButtonProps, 'aria'>>;

export const defaultProps: DefaultProps = {
    size: 'medium',
    variant: 'primary',
    disabled: false,
    isLoading: false,
};
