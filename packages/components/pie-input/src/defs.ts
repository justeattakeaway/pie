export const types = ['text', 'number', 'password', 'url', 'email', 'tel'] as const;
export const inputModes = ['none', 'text', 'tel', 'url', 'email', 'numeric', 'decimal', 'search'] as const;
export const statusTypes = ['success', 'error'] as const;
export interface InputProps {
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
     * When true, the user cannot edit the control. Not the same as disabled.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.
     */
    readonly?: boolean;

    /**
     * An optional default value to use when the input is reset.
     */
    defaultValue?: string;

    /**
     * An optional assistive text to display below the input element.
     */
    assistiveText?: string;

    /**
     * The status of the input component / assistive text such as error, success or default.
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
}

// TODO - There is a ticket to add default prop values to our existing components. This might be replaced by the code added in that ticket.
/**
 * A subset of interface properties that are required (i.e. they have a fallback value in the component).
 */
type SubsetRequiredProperties<T, K extends keyof T> = Required<Pick<T, K>>;

/**
 * The default values for the `InputProps` that are required (i.e. they have a fallback value in the component).
 */
type DefaultInputPropValues = SubsetRequiredProperties<InputProps, 'type' | 'value'>;

/**
 * Default values for optional properties that have default fallback values in the component.
 */
export const InputDefaultPropertyValues: DefaultInputPropValues = {
    type: 'text',
    value: '',
};
