/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const designTokensJson = require('@justeat/pie-design-tokens/dist/tokens.json');

// eslint-disable-next-line func-names
module.exports = function () {
    const colors = designTokensJson.theme.jet.color.global;

    const categories = {
        whiteBlack: ['white', 'black'],
        blue: ['blue'],
        charcoal: ['charcoal'],
        green: ['green'],
        mozzarella: ['mozzarella'],
        orange: ['orange'],
        purple: ['purple'],
        red: ['red'],
        yellow: ['yellow']
    };

    const result = {};

    for (const category in categories) {
        result[category] = {};

        for (const colourKey in colors) {
            categories[category].forEach(categoryString => {
                if (colourKey.includes(categoryString)) {
                    result[category][colourKey] = colors[colourKey];
                }
            });
        }
    }
};
