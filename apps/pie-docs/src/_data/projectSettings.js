// eslint-disable-next-line func-names
module.exports = function () {
    return {
        environment: process.env.DEPLOYMENT_ENVIRONMENT || 'development',
    };
};
