import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'error', 'success'] as const;

export interface AssistiveTextProps {
     /**
     * What variant the assistive text should be such as default, error or success.
     */
    variant?: typeof variants[number];

     /**
     * If true, hides the component visually but leaves it accessible for screen readers.
     */
    isVisuallyHidden?: boolean;
}

export type DefaultProps = ComponentDefaultProps<AssistiveTextProps>;

export const defaultProps: DefaultProps = {
    variant: 'default',
    isVisuallyHidden: false,
};
