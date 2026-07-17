module.exports = {
    overrides: [
        {
            files: ['**/*.spec.js'],
            plugins: ['jest'],
            env: {
                jest: true,
            },
            rules: {
                'jest/no-disabled-tests': 'warn',
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/valid-expect': 'error',
            },
        },
    ],
};
