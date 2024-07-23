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

    /**
     * The value of the textarea (used as a key/value pair in HTML forms with `name`).
     */
    value: string;

    /**
     * The name of the textarea (used as a key/value pair with `value`). This is required in order to work properly with forms.
     */
    name?: string;

    /**
     * Allows the user to enable or disable autocomplete functionality on the textarea field.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for more information and values.
     */
    autocomplete?: string;

    /**
     * If true, the textarea will be focused on the first render.
     * No more than one element in the document or dialog may have the autofocus attribute. If applied to multiple elements the first one will receive focus.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) for more information.
     */
    autoFocus?: boolean;

    /**
     * When true, the user cannot edit the control. Not the same as disabled.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.
     */
    readonly?: boolean;

    /**
     * An optional default value to use when the textarea is reset.
     */
    defaultValue?: string;

    /**
     * If true, the textarea is required to have a value before submitting the form. If there is no value, then the component validity state will be invalid.
     */
    required?: boolean;
}

/**
 * The default values for the `TextareaProps` that are required (i.e. they have a fallback value in the component).
 */
type DefaultProps = ComponentDefaultProps<TextareaProps, 'value' | 'disabled' | 'size' | 'resize'>;

/**
 * Default values for optional properties that have default fallback values in the component.
 */
export const defaultProps: DefaultProps = {
    value: '',
    disabled: false,
    size: 'medium',
    resize: 'auto',
};
