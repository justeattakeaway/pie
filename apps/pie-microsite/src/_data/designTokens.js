const designTokensJson = require('@justeat/pie-design-tokens/dist/tokens.json');

// eslint-disable-next-line func-names
module.exports = function () {
    return designTokensJson.theme.jet;
};
