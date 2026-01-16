import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';

const isBrowserTesting = process.env.BROWSER_TESTING === 'true';

const config: StorybookConfig = {
    stories: isBrowserTesting
        ? [
            "../stories/testing/**/*.test.stories.ts"
        ]
        : [
            "../stories/**/*.mdx",
            "../stories/*.stories.@(js|ts|tsx)",
            "../stories/!(testing)/**/*.stories.@(js|ts|tsx)",
        ],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@storybook/addon-actions",
        "@storybook/addon-designs",
        "@storybook/addon-links",
        "storybook-dark-mode",
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
    ],
    framework: {
        name: "@storybook/web-components-vite",
        options: {}
    },
    docs: {
        autodocs: false
    },
    staticDirs: ['../static'],
};

export default config;
