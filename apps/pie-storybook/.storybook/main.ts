import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';

const isBrowserTesting = process.env.BROWSER_TESTING === 'true';

const config: StorybookConfig = {
    viteFinal (config) {
        config.define = {
            ...config.define,
            // Ensure source-imported PieElement subclasses work in Storybook's dev
            // server, where the per-package vite build-time replacement is absent.
            __PACKAGE_VERSION__: JSON.stringify('storybook-dev'),
        };
        return config;
    },
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
        "@storybook/addon-a11y",
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
