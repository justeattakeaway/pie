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
        },
    },
    plugins: [dts({
        insertTypesEntry: true,
        rollupTypes: true,
        outputDir: 'dist',
    })],
    ...extendedConfig,
});

export default sharedConfig;
