import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

import { deepmerge } from 'deepmerge-ts';

// https://vitejs.dev/config/
const sharedConfig = ({
    build = {}, plugins = [], dtsConfig = {}, ...rest
}) => defineConfig({
    build: deepmerge({
        lib: {
            entry: {
                index: 'src/index.ts',
                react: 'src/react.ts',
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: (id) => {
                if (['react', '@lit/react'].includes(id) || /^lit/.test(id)) {
                    return true;
                }

                if (id.startsWith('@justeattakeaway/pie-')) {
                    console.info(`Excluding ${id} from the bundle`);
                    return true;
                }

                return false;
            },
        },
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
        outputDir: 'dist',
        rollupTypes: true,
        ...dtsConfig,
    }),
    visualizer({
        gzipSize: true,
        brotliSize: true,
    })], plugins),

    ...rest,
});

export default sharedConfig;
