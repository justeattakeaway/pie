import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { deepmerge } from 'deepmerge-ts';

const bundledJetDeps = [
    '@justeattakeaway/pie-components-config',
    '@justeattakeaway/pie-css',
    '@justeattakeaway/pie-webc-testing',
];

// https://vitejs.dev/config/
const sharedConfig = ({ build = {}, plugins = [], ...rest }) => defineConfig({
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

                if (id.startsWith('@justeattakeaway/pie-') && !bundledJetDeps.includes(id)) {
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
    })], plugins),

    ...rest,
});

export default sharedConfig;
