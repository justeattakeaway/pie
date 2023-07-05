module.exports = (api) => {
    if (typeof (api) !== 'undefined') {
        api.cache(true);
    }

    const presets = [
        ['@vue/babel-preset-jsx']
    ];
    const plugins = [
        [
            '@babel/plugin-proposal-private-methods',
            {
                loose: true,
            }
        ],
        [
            '@babel/plugin-proposal-private-property-in-object',
            {
                loose: true,
            }
        ]
    ];

    return {
        presets,
        plugins,
    };
};
