import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import path from 'path';

export default defineConfig({
    build: {
        target: 'node18',
        outDir: 'generators',
        lib: {
            entry: {
                app: [path.resolve(__dirname, 'src/app/index.ts')],
            },
            formats: ['es'],
            name: 'generator-pie-component',
        },
        rollupOptions: {
            external: ['yeoman-generator', 'chalk'],
            input: {
                app: path.resolve(__dirname, 'src/app/index.ts'),
            },
            output: {
                entryFileNames: '[name]/index.js',
                format: 'es',
            },
            plugins: [
                del({ targets: ['generators'] }),
                copy({
                    hook: 'writeBundle',
                    targets: [
                        { src: 'src/app/templates', dest: 'generators/app' },
                    ],
                }),
            ],
        },
    },
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        exclude: [
            '**/test/{accessibility,component,system,visual}/*.spec.{js,ts}',
            '**/test/**/*.browser.spec.{js,ts}',
            '**/node_modules/**/*'
        ],
    },
});
