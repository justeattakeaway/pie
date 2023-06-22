module.exports = {
    rules: {
        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
    },
};
