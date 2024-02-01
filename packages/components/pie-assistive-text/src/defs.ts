export const variants = ['default', 'error', 'success'] as const;

export type Variant = typeof variants[number];

export interface AssistiveTextProps {
     /**
     * What variant the assistive text should be such as info, error or success.
     */
    variant?: Variant;
}
