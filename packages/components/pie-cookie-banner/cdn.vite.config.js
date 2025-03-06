import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import { deepmerge } from 'deepmerge-ts';

// https://vitejs.dev/config/
const sharedConfig = ({ build = {}, plugins = [], ...rest }) => defineConfig({
    build: deepmerge(
        {
            lib: {
                entry: 'src/index.ts',
                formats: ['iife'], // 'iife' bundles everything into one file
                name: 'PieCookieBanner', // Global variable for the component
                fileName: () => 'index.js',
            },
            rollupOptions: {
                external: [], // Ensure everything is bundled
                output: {
                    globals: {}, // Define globals if you really want something external
                },
            },
            outDir: 'cdn_dist',
            minify: 'terser', // Ensures smaller output
        },
        build,
    ),
    plugins: deepmerge(
        [
            dts({
                insertTypesEntry: true,
                outputDir: 'cdn_dist',
                rollupTypes: true,
            }),
            visualizer({
                gzipSize: true,
                brotliSize: true,
            }),
        ],
        plugins,
    ),
    ...rest,
});

export default sharedConfig;
