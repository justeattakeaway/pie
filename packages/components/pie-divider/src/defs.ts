export const variants = ['default', 'inverse'] as const;
export const orientations = ['horizontal', 'vertical'] as const;

export type Variant = typeof variants[number];

export type Orientation = typeof orientations[number];

export interface DividerProps {
   /**
     * What style variant the divider should be such as default or vertical.
     */
   variant: Variant;
    /**
     * What orientation the divider should be such as horizontal or inverse.
     */
    orientation: Orientation;
}
