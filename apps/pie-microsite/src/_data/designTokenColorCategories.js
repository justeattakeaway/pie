const metadata = require('../utilities/metadata.json');

// eslint-disable-next-line func-names
module.exports = function () {
    return {
        global: metadata.global.color,
        alias: metadata.theme.jet.color.alias,
        categoryTypes: metadata.categoryTypes.color
    };
};
