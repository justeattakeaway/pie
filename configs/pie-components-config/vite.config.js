import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
const sharedConfig = (extendedConfig = {}) => defineConfig({
    build: {
        lib: {
            entry: {
                index: 'src/index.ts',
                react: 'src/react.ts',
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: /^lit/,
            output: {
                format: 'cjs',
            },
        },
    },
    plugins: [dts({
        insertTypesEntry: true,
        outputDir: 'dist/types',
    })],
    ...extendedConfig,
});

export default sharedConfig;
