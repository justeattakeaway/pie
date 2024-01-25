import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        exclude: [
            '**/test/{accessibility,component,system,visual}/*.spec.{js,ts}',
            '**/test/mixins/**/*.browser.spec.{js,ts}'
        ],
    },
});
