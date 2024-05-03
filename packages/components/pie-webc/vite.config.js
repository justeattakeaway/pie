import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        dir: '.',
        environment: 'node',
        globals: true,
        exclude: [
            '**/node_modules/**/*'
        ],
    },
});
