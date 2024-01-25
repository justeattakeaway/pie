import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        dir: '.',
        globals: true,
        include: [
            './src/__tests__/**/*.test.js',
        ],
    },
    environment: 'jsdom',
});
