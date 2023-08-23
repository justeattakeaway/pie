/**
 * Arg Types relating to internationalisation properties such as dir
 */
export const i18nArgTypes = {
    dir: {
        control: 'select',
        options: [undefined, 'ltr', 'rtl', 'auto'],
        description: 'Sets the component `dir` value, if `undefined`, the value is inherited from the `dir` attribute set in the document root',
    },
};
