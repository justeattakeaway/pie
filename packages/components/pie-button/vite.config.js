/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: {
                index: 'src/index.ts',
                react: 'src/react.ts'
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: /^lit/,
        },
    },
    plugins: [dts({
        insertTypesEntry: true,
        outputDir: 'dist/types',
    })],
});
