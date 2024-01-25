const vitest = require('eslint-plugin-vitest');

module.exports = {
    plugins: [
        'vitest',
    ],
    rules: {
        ...vitest.configs.recommended.rules,
    },
    globals: {
        ...vitest.environments.env.globals,
    },
};
