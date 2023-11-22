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
        environment: 'jsdom',
    },
});
