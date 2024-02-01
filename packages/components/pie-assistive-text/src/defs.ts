export const variants = ['default', 'error', 'success'] as const;

export interface AssistiveTextProps {
     /**
     * What variant the assistive text should be such as default, error or success.
     */
    variant?: typeof variants[number];
}
