import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';
import type { InlineConfig } from 'vite';

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
        ...(isBrowserTesting ? [] : ["@storybook/addon-a11y"]),
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
    async viteFinal (config: InlineConfig) {
        config.define = {
            ...config.define,
            // Required when importing PIE component source files directly (not pre-built dist).
            // Normally injected by the shared pie-components-config vite build.
            __PACKAGE_VERSION__: JSON.stringify('poc'),
        };
        return config;
    },
};

export default config;
