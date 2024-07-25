import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const sizes = ['small', 'medium', 'large'] as const;
export const resizeModes = ['auto', 'manual'] as const;

export interface TextareaProps {
    /**
     * Same as the HTML disabled attribute - indicates whether the textarea is disabled.
     */
    disabled?: boolean;

    /**
     * The size of the textarea field. Can be `small`, `medium` or `large`. Defaults to `medium`.
     */
    size?: typeof sizes[number];

    /**
     * The resize mode of the textarea. Can be `auto` or `manual`. Defaults to `auto`.
     * When set to `auto`, the textarea will resize vertically as needed.
     * When set to `manual`, the textarea will not resize automatically but can be resized by the user.
     */
    resize?: typeof resizeModes[number];

    label: string;

    maxLength?: number;

    /**
     * The value of the textarea.
     */
    value: string;
}

/**
 * The default values for the `TextareaProps` that are required (i.e. they have a fallback value in the component).
 */
type DefaultProps = ComponentDefaultProps<TextareaProps, 'disabled' | 'size' | 'resize' | 'label' | 'value'>;

/**
 * Default values for optional properties that have default fallback values in the component.
 */
export const defaultProps: DefaultProps = {
    disabled: false,
    size: 'medium',
    resize: 'auto',
    label: '',
    value: '',
};
