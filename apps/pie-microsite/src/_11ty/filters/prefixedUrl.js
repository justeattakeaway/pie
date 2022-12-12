// eslint-disable-next-line func-names
module.exports = function (path) {
    return process.env.PIE_URL_PREFIX
        ? `${process.env.PIE_URL_PREFIX}/${path}`
        : path;
};
