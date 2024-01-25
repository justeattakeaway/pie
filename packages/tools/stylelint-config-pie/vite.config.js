// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        dir: '.',
        globals: true,
        include: [
            './__tests__/**/*.test.js',
        ],
    },
    environment: 'jsdom',
});
