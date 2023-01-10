module.exports = {
    extends: '@justeattakeaway/pie-stylelint-config',
    rules: {
        'color-named': 'never',
        'max-nesting-depth': 3,
        'media-query-list-comma-newline-after': 'always-multi-line',
        'selector-max-compound-selectors': 5,
        'selector-max-id': 0,
        // TODO - catch up with design
        'time-min-milliseconds': ''
    }
};
