export default [
    {
        message: "What is the name of your new component? (Without the 'pie-' prefix e.g. 'form-label')",
        name: 'name',
        type: 'input',
        validate: (input: string) => {
            if (!input || input.trim() === '') {
                return 'Please enter a component name';
            }
            if (input.startsWith('pie-')) {
                return 'Please enter a component name without the "pie-" prefix';
            }
            return true;
        },
    },
    {
        message: 'Does your web component need to be aware of text direction to render different markup or styles to support right-to-left languages?',
        name: 'needsRTL',
        type: 'confirm',
        default: false,
    },
    {
        message: 'Does your web component need to utilise the ElementInternals API?',
        name: 'needsFormControl',
        type: 'confirm',
        default: false,
    },
    {
        message: 'Does your web component need to delegate focus to the first focusable element in its shadow DOM?',
        name: 'needsFocusDelegation',
        type: 'confirm',
        default: false,
    }
];
