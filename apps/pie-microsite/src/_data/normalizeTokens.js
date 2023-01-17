const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');

// clone tokens to avoid mutating the original reference.
const clonedPieDesignTokens = JSON.parse(JSON.stringify(pieDesignTokens));

/**
 * normalizes the font alias tokens into wide/narrow groups
 * @returns - alias tokens categorized by wide/narrow objects to be used in their respective pages.
 */
const normalizeFontAliasTokens = () => {
    const compose = modifier => {
        const tokens = JSON.parse(JSON.stringify(clonedPieDesignTokens.theme.jet.font.alias));
        Object.keys(tokens).forEach(key => {
            if (tokens[key].size) return;
            tokens[key].size = tokens[key][`size--${modifier}`];
        });
        return tokens;
    };

    clonedPieDesignTokens.theme.jet.font.alias = {
        wide: compose('wide'),
        narrow: compose('narrow')
    };
};

const init = () => {
    normalizeFontAliasTokens();

    return clonedPieDesignTokens;
};

module.exports = init();
