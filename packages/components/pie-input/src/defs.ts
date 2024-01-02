export const types = ['text', 'number', 'password', 'search', 'url', 'email', 'tel'] as const;

export interface InputProps {
    /**
     * The type of HTML input to render.
     */
    type?: typeof types[number];
}
