import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        include: [
            './test/**/*.test.js',
        ],
    },
});
