export const types = ['text', 'number', 'password', 'search', 'url', 'email', 'tel'] as const;

export interface InputProps {
    /**
     * The type of HTML input to render.
     */
    type?: typeof types[number];

    /**
     * The value of the input (used in HTML forms as a key/value pair in HTML forms with the name).
     */
    value: string;

    /**
     * The name of the input (used in HTML forms as a key/value pair with the value). This is required in order to work properly with forms.
     */
    name: string;
}
