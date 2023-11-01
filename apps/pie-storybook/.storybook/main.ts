import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|ts)"
    ],
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-actions",
        "@storybook/addon-designs",
        "@storybook/addon-essentials",
        "@storybook/addon-links",
        "storybook-dark-mode",
    ],
    framework: {
        name: "@storybook/web-components-vite",
        options: {}
    },
    docs: {
        autodocs: false
    }
}

export default config;
