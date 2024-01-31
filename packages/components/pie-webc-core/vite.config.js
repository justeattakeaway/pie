import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: 'src/index.ts',
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: (id) => /^lit/.test(id),
        },
    },
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        exclude: [
            '**/test/{accessibility,component,system,visual}/*.spec.{js,ts}',
            '**/test/mixins/**/*.browser.spec.{js,ts}',
            '**/node_modules/**/*'
        ],
    },
});
