export const types = ['text', 'number', 'password', 'url', 'email', 'tel'] as const;

export interface InputProps {
    /**
     * The type of HTML input to render.
     */
    type?: typeof types[number];

    /**
     * The value of the input (used as a key/value pair in HTML forms with `name`).
     */
    value?: string;

    /**
     * The name of the input (used as a key/value pair with `value`). This is required in order to work properly with forms.
     */
    name?: string;

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
}

// TODO - There is a ticket to add default prop values to our existing components. This might be replaced by the code added in that ticket.
/**
 * A subset of interface properties that are required (i.e. they have a fallback value in the component).
 */
type SubsetRequiredProperties<T, K extends keyof T> = Required<Pick<T, K>>;

/**
 * The default values for the `InputProps` that are required (i.e. they have a fallback value in the component).
 */
type DefaultInputPropValues = SubsetRequiredProperties<InputProps, 'type' | 'value' | 'autoFocus'>;

/**
 * Default values for optional properties that have default fallback values in the component.
 */
export const InputDefaultPropertyValues: DefaultInputPropValues = {
    type: 'text',
    value: '',
    autoFocus: false,
};
