export const sizes = ['xs', 's', 'm', 'l', 'xl'] as const;
export const variants = ['brand', 'secondary', 'inverse'] as const;

export type AriaProps = {
    label?: string;
};

export interface SpinnerProps {
    /**
     * The ARIA labels used for the spinner component.
     */
    aria?: AriaProps;
    /**
     * What size the spinner should be.
     */
    size?: typeof sizes[number];
    /**
     * What style variant the spinner should be such as brand, secondary or inverse.
     */
    variant?: typeof variants[number];
}
