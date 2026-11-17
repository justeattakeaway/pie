import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const types = ['text', 'number', 'password', 'url', 'email', 'tel'] as const;
export const inputModes = ['none', 'text', 'tel', 'url', 'email', 'numeric', 'decimal', 'search'] as const;
export const statusTypes = ['default', 'success', 'error'] as const;
export const sizes = ['small', 'medium', 'large'] as const;

export interface TextInputProps {
    /**
     * The type of HTML input to render.
     */
    type?: typeof types[number];

    /**
     * The value of the input (used as a key/value pair in HTML forms with `name`).
     */
    value: string;

    /**
     * The name of the input (used as a key/value pair with `value`). This is required in order to work properly with forms.
     */
    name?: string;

    /**
     * Same as the HTML disabled attribute - indicates whether or not the input is disabled.
     */
    disabled?: boolean;

    /**
     * Specifies a regular expression the form control's value should match
     */
    pattern?: string;

    /**
     * Minimum length (number of characters) of value. Only applies to types: `text`, `url`, `tel`, `email`, and `password`.
     */
    minlength?: number;

    /**
     * Maximum length (number of characters) of value. Only applies to types: `text`, `url`, `tel`, `email`, and `password`.
     */
    maxlength?: number;

    /**
     * Allows the user to enable or disable autocomplete functionality on the input field.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for more information and values.
     */
    autocomplete?: string;

    /**
     * The placeholder text to display when the input is empty. Only applies to types: `text`, `url`, `tel`, `email`, and `password`.
     */
    placeholder?: string;

    /**
     * If true, the input will be focused on the first render.
     * No more than one element in the document or dialog may have the autofocus attribute. If applied to multiple elements the first one will receive focus.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) for more information.
     */
    autoFocus?: boolean;

    /**
     * Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#inputmode) for more information.
     */
    inputmode?: typeof inputModes[number];

    /**
     * Controls whether and how text input is automatically capitalised as it is entered by the user.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize) for more information.
     */
    autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

    /**
     * Indicates whether automatic correction of spelling or grammar should be enabled for the input.
     * Exposed as a boolean to match `HTMLElement.autocorrect`; the value is forwarded to the inner
     * `input` as the native enumerated `autocorrect` attribute (`on` / `off`).
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocorrect) for more information.
     */
    autocorrect?: boolean;

    /**
     * Indicates whether the element may be checked for spelling errors.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck) for more information.
     */
    spellcheck?: boolean;

    /**
     * Provides a hint to browsers as to the action label to display on the virtual keyboard's enter key.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) for more information.
     */
    enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

    /**
     * When true, the user cannot edit the control. Not the same as disabled.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.
     */
    readonly?: boolean;

    /**
     * An optional default value to use when the input is reset.
     */
    defaultValue?: string;

    /**
     * An optional assistive text to display below the input element. Must be provided when the status is success or error.
     */
    assistiveText?: string;

    /**
     * The status of the input component / assistive text. Can be default, success or error.
     */
    status?: typeof statusTypes[number];

    /**
     * An optional amount that value should be incremented or decremented by when using the up and down arrows in the input. Only applies when type is `number`.
     */
    step?: number;

    /**
     * The minimum value of the input. Only applies when type is `number`. If the value provided is lower, the input is invalid.
     */
    min?: number;

    /**
     * The maximum value of the input. Only applies when type is `number`. If the value provided is higher, the input is invalid.
     */
    max?: number;

    /**
     * The size of the input field. Can be `small`, `medium`, or `large`. Defaults to `medium`.
     */
    size?: typeof sizes[number];

    /**
     * If true, the input is required to have a value before submitting the form. If there is no value, then the component validity state will be invalid.
     */
    required?: boolean;
}

/**
 * The default values for the `TextInputProps` that are required (i.e. they have a fallback value in the component).
 */
type DefaultProps = ComponentDefaultProps<TextInputProps, 'type' | 'value' | 'size' | 'status' | 'disabled' | 'readonly'>;

/**
 * Default values for optional properties that have default fallback values in the component.
 */
export const defaultProps: DefaultProps = {
    type: 'text',
    value: '',
    size: 'medium',
    status: 'default',
    disabled: false,
    readonly: false,
};
