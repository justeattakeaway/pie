import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => ({
    root: __dirname,
    build: {
        outDir: path.resolve(__dirname, 'src/assets/js/dist'),
        emptyOutDir: true,
        lib: {
            entry: {
                'pie-components': path.resolve(__dirname, 'src/assets/js/pie-components.js'),
                'dsd-polyfill': path.resolve(__dirname, 'src/assets/js/dsd-polyfill.js'),
                'lit-hydrate-support': path.resolve(__dirname, 'src/assets/js/lit-hydrate-support.js'),
            },
            formats: ['es'],
        },
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name]-[hash].js',
            },
        },
    },
}));
