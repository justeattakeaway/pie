import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        include: [
            './__tests__/**/*.test.js',
        ],
    },
});
