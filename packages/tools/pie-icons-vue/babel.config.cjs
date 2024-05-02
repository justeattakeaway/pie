module.exports = (api) => {
    if (typeof (api) !== 'undefined') {
        api.cache(true);
    }

    const presets = [
        ['@vue/babel-preset-jsx']
    ];

    return {
        presets,
    };
};
