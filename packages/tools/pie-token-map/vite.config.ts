import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: 'src/index.ts',
            },
            formats: ['es'],
        },
    },
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        include: [
            './test/unit/**/*.{spec,test}.{js,ts}',
        ],
        exclude: ['**/node_modules/**'],
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            outDir: 'dist',
            rollupTypes: true,
        }),
        visualizer({
            gzipSize: true,
            brotliSize: true,
        }),
    ],
});
