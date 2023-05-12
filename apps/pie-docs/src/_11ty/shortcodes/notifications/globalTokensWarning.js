const notification = require('../notification');

/**
 * A specific notification implementation for the global tokens warning
 * @returns {string} HTML string of the specific global tokens warning notification
 */
// eslint-disable-next-line func-names
module.exports = function (aliasTokenPagePath) {
    if (!aliasTokenPagePath || aliasTokenPagePath === '') {
        throw new Error('No aliasTokenPagePath provided');
    }

    return notification({
        type: 'warning',
        message: `**Don't use Global Tokens directly.** Please make sure you're using [alias tokens](${aliasTokenPagePath}) in your products.`,
    });
};
