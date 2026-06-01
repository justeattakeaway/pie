import { defineConfig } from 'vitest/config';

export default defineConfig({
    define: {
        __PACKAGE_VERSION__: JSON.stringify('test'),
    },
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        exclude: [
            '**/test/{accessibility,component,system,visual}/*.spec.{js,ts}',
            '**/test/**/*.browser.spec.{js,ts}',
            '**/node_modules/**/*'
        ],
    },
});
