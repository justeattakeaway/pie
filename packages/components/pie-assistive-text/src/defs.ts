import { type ComponentDefaultPropsGeneric } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'error', 'success'] as const;

export interface AssistiveTextProps {
     /**
     * What variant the assistive text should be such as default, error or success.
     */
    variant?: typeof variants[number];
}

export type DefaultProps = ComponentDefaultPropsGeneric<AssistiveTextProps, 'variant'>;

export const defaultProps: DefaultProps = {
    variant: 'default',
};
