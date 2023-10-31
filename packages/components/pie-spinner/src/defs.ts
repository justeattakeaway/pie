export const sizes = ['xs', 's', 'm', 'l', 'xl'] as const;
export const variants = ['brand', 'secondary', 'inverse'] as const;

export interface SpinnerProps {
    /**
     * What size the button should be.
     */
    size: typeof sizes[number];
    /**
     * What style variant the spinner should be such as brand, secondary or inverse.
     */
    variant: typeof variants[number];
}
