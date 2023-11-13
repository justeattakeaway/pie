import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { deepmerge } from 'deepmerge-ts';

/**
 * This function takes in the dependencies section from a `package.json` file
 * and returns a list of the PIE web components that the package depends on.
 *
 * @example
 * const { dependencies } = require('./package.json');
 * const pieComponentDependencies = getComponentDependencies(dependencies);
 *
 * @param {Record<string, string>} dependencies - The dependencies section from a `package.json` file
 * @returns {Array<string>} A list of pie components that this component depends on
 */
export const getComponentDependencies = (dependencies = {}) => {
    const deps = Object.keys(dependencies);

    const jetDeps = deps.filter((name) => name.startsWith('@justeattakeaway/pie-'));

    const nonComponentJetDeps = [
        '@justeattakeaway/pie-components-config',
        '@justeattakeaway/pie-css',
        '@justeattakeaway/pie-icons',
        '@justeattakeaway/pie-icons-react',
        '@justeattakeaway/pie-icons-vue',
        '@justeattakeaway/pie-icons-webc',
        '@justeattakeaway/pie-webc-core',
        '@justeattakeaway/pie-webc-testing',
    ];

    const jetComponentDeps = jetDeps.filter((name) => !nonComponentJetDeps.includes(name));

    if (jetComponentDeps.length > 0) {
        // eslint-disable-next-line no-console
        console.debug(`Excluding the following PIE component dependencies from the bundle:\n- ${jetComponentDeps.join('\n- ')}`);
    }

    return jetComponentDeps;
};

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
            external: ['react', /^lit/],
        },
    }, build),

    plugins: deepmerge([dts({
        insertTypesEntry: true,
        outputDir: 'dist',
        rollupTypes: true,
    })], plugins),

    ...rest,
});

export default sharedConfig;
