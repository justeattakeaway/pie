import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

import { deepmerge } from 'deepmerge-ts';

// https://vitejs.dev/config/
const sharedConfig = ({ build = {}, plugins = [], ...rest }) => defineConfig({
    build: deepmerge({
        lib: {
            entry: {
                index: 'src/index.ts',
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: (id) => {
                if (['react', '@lit/react'].includes(id)) {
                    return true;
                }
                return false;
            },
        },
        outDir: 'cdn_dist',
    }, build),
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        include: [
            './src/__tests__/**/*.{spec,test}.{js,ts}',
            './test/unit/**/*.{spec,test}.{js,ts}',
        ],
        exclude: ['**/node_modules/**'],
    },
    plugins: deepmerge([dts({
        insertTypesEntry: true,
        outputDir: 'cdn_dist',
        rollupTypes: true,
    }),
    visualizer({
        gzipSize: true,
        brotliSize: true,
    })], plugins),

    ...rest,
});

export default sharedConfig;
