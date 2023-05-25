/* eslint-disable import/no-extraneous-dependencies */
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export const viteConfig = {
    build: {
        lib: {
            entry: 'src/index.ts',
            fileName: 'index',
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
};
