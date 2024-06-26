import { type ComponentDefaultPropsGeneric } from '@justeattakeaway/pie-webc-core';

export const sizes = ['small', 'medium', 'large'] as const;

export interface TextareaProps {
    /**
     * Same as the HTML disabled attribute - indicates whether the textarea is disabled.
     */
    disabled?: boolean;

    /**
     * The size of the textarea field. Can be `small`, `medium` or `large`. Defaults to `medium`.
     */
    size?: typeof sizes[number];
}

/**
 * The default values for the `TextareaProps` that are required (i.e. they have a fallback value in the component).
 */
type DefaultProps = ComponentDefaultPropsGeneric<TextareaProps, 'size'>;

/**
 * Default values for optional properties that have default fallback values in the component.
 */
export const defaultProps: DefaultProps = {
    size: 'medium',
};
