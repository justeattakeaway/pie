import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    // __PACKAGE_VERSION__ is injected by downstream consumers in real builds.
    // Under Vitest we stub it so importing PieElement (which reads it) works in jsdom.
    ...(process.env.VITEST ? {
        define: {
            __PACKAGE_VERSION__: JSON.stringify('test'),
        },
    } : {}),
    build: {
        lib: {
            entry: {
                index: 'src/index.ts',
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: (id) => /^lit/.test(id),
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
    plugins: [
        visualizer({
            gzipSize: true,
            brotliSize: true,
        })
    ],
});
