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
        globals: true,
        include: [
            './src/test/**/*.spec.{js,ts}',
        ],
        exclude: [
            './src/test/**/*.browser.spec.{js,ts}',
        ],
        environment: 'jsdom',
    },
});
