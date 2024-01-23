export const types = ['text', 'number', 'password', 'search', 'url', 'email', 'tel'] as const;

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
}

// Define the default values for optional properties that have default fallback values in the component.
export const InputDefaultPropertyValues: Required<InputProps> = {
    type: 'text',
    value: '',
    name: '',
    pattern: '',
};
