import type { StorybookConfig } from '@storybook/web-components-vite';

const isBrowserTesting = process.env.BROWSER_TESTING === 'true';

const config: StorybookConfig = {
    stories: isBrowserTesting 
        ? [
            "../stories/**/*.test.mdx",
            "../stories/**/*.test.stories.@(js|ts|tsx)"
        ] 
        : [
            "../stories/**/*.mdx",
            "../stories/**/!(*.test).stories.@(js|ts|tsx)"
          ],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@storybook/addon-actions",
        "@storybook/addon-designs",
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
};

export default config;
