/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
const config = defineConfig({
    build: {
        lib: {
            entry: {
                index: 'icons/index.js',
                IconAlcoholFilled: 'icons/IconAlcoholFilled.js',
            },
            formats: ['cjs'],
        },
    },
});

export default config;
