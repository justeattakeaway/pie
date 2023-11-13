import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { deepmerge } from 'deepmerge-ts';

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
