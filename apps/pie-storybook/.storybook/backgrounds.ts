import tokens from '@justeat/pie-design-tokens/dist/tokens.json';

const { alias, global } = tokens.theme.jet.color;

// Storybook 9+ backgrounds format: options is a key-value map where the key is
// the value used when setting the background globally. The default key must match
// one of the option keys.
const CUSTOM_BACKGROUNDS = {
    default: 'light (container-default)',
    options: {
        'light (container-default)': {
            name: 'light (container-default)',
            value: 'var(--dt-color-container-default)', // Uses CSS variable for better support of dark/light mode in Storybook
        },
        'dark (container-dark)': {
            name: 'dark (container-dark)',
            value: alias.default['container-dark'],
        },
        'background-subtle': {
            name: 'background-subtle',
            value: alias.default['background-subtle'],
        },
        'background-dark': {
            name: 'background-dark',
            value: alias.default['background-dark'],
        },
        'container-inverse': {
            name: 'container-inverse',
            value: 'var(--dt-color-container-inverse)', // Uses CSS variable for better support of dark/light mode in Storybook
        },
        'brand orange': {
            name: 'brand orange',
            value: global.orange,
        },
        saddlebrown: {
            name: 'saddlebrown',
            value: 'saddlebrown',
        },
        aquamarine: {
            name: 'aquamarine',
            value: 'aquamarine',
        },
    },
};

export default CUSTOM_BACKGROUNDS;
