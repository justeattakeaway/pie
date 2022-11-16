/**
 * Removes the slug from a URL
 * @param {String} url
 * @returns {String}
 */
// eslint-disable-next-line func-names
module.exports = function (url) {
    const sub = url.substring(0, url.length - 1);
    const indexOfLastSlash = sub.lastIndexOf('/');
    const anotherSub = sub.substring(0, indexOfLastSlash + 1);

    return anotherSub;
};
