module.exports = {
    extends: [require.resolve('@justeattakeaway/pie-eslint-config/strict')],
    plugins: [
        'json-format'
    ],
    root: true,
    settings: {
        'json/sort-package-json': false
    }
};
