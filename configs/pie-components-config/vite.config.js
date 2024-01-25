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
        include: [
            './src/__tests__/**/*.test.js',
        ],
    },
    plugins: deepmerge([dts({
        insertTypesEntry: true,
        outputDir: 'dist',
        rollupTypes: true,
    })], plugins),

    ...rest,
});

export default sharedConfig;


// import { defineConfig } from 'vitest/config';

// export default defineConfig({
// 	test: {
// 		dir: '.',
// 		globals: true,
// 		include: [
// 			'./src/__tests__/**/*.test.js',
// 		],
// 	},
// 	environment: 'jsdom',
// });
