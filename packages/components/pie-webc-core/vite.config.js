import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

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
            '**/test/**/*.browser.spec.{js,ts}',
            '**/node_modules/**/*'
        ],
    },
    plugins: [
        visualizer({
            gzipSize: true,
            brotliSize: true,
        })
    ],
});
