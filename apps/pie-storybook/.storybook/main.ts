import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|ts)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        'storybook-addon-designs',
    ],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    docs: {
        autodocs: false,
    },
};

export default config;
