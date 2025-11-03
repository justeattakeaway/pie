import stylelint from 'stylelint';
import { readFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { createPlugin, utils: { report, validateOptions } } = stylelint;

const ruleName = '@justeattakeaway/stylelint-pie-design-tokens';

/**
 * Parse CSS file and extract all custom property names
 */
function parseTokensFromCSS (cssContent) {
    const tokens = new Set();
    const regex = /--(dt|xds)-([a-z0-9-]+)/gi;
    const matches = cssContent.matchAll(regex);

    Array.from(matches).forEach((match) => {
        tokens.add(match[2]);
    });

    return tokens;
}

/**
 * Traverse metadata to extract token information
 */
function traverseMetadata (obj, path, tokens) {
    Object.entries(obj).forEach(([key, value]) => {
        if (!value || typeof value !== 'object') return;

        const newPath = [...path, key];
        const isLeaf = value.description !== undefined;

        if (isLeaf) {
            const tokenName = newPath
                .filter((p) => p !== 'global' && p !== 'alias' && p !== 'default' && p !== 'dark')
                .join('-');

            tokens.set(tokenName, {
                isDeprecated: value.status?.name === 'deprecated',
                replacement: value.status?.replacementToken,
                category: path[0] || '',
            });
        } else {
            traverseMetadata(value, newPath, tokens);
        }
    });
}

/**
 * Load tokens from CSS and metadata
 *  - CSS provides the list of valid tokens
 *  - Metadata provides token details
 */
function getTokens () {
    try {
        const cssPath = require.resolve('@justeat/pie-design-tokens/dist/jet.css');
        const cssContent = readFileSync(cssPath, 'utf8');
        const validTokensFromCSS = parseTokensFromCSS(cssContent);

        const hslCssPath = require.resolve('@justeat/pie-design-tokens/dist/jet-hsl-colors.css');
        const hslCssContent = readFileSync(hslCssPath, 'utf8');
        const hslTokens = parseTokensFromCSS(hslCssContent);

        hslTokens.forEach((token) => validTokensFromCSS.add(token));

        const metadataPath = require.resolve('@justeat/pie-design-tokens/metadata/tokensMetadata.json');
        const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));

        const tokens = new Map();

        traverseMetadata(metadata, [], tokens);

        return { tokens, validTokensFromCSS };
    } catch (error) {
        return { tokens: new Map(), validTokensFromCSS: new Set() };
    }
}

/**
 * Stylelint plugin to validate PIE design tokens
 * @param {Boolean} primaryOption - Enables the plugin
 * @returns {Function} Lint function
 */
function ruleFunction (primaryOption) {
    return function lint (root, result) {
        const validOptions = validateOptions(result, ruleName, { actual: primaryOption });

        if (!validOptions) return;

        const { tokens, validTokensFromCSS } = getTokens();

        root.walkDecls((decl) => {
            const regex = new RegExp('--(dt|xds)-([a-z0-9-]+)', 'gi');
            const matches = decl.value.matchAll(regex);

            Array.from(matches).forEach((match) => {
                const [token, prefix, tokenWithoutPrefix] = match;

                const tokenInfo = tokens.get(tokenWithoutPrefix);

                if (tokenInfo?.isDeprecated) {
                    const replacementToken = tokenInfo.replacement
                        ? `--${prefix}-${tokenInfo.category}-${tokenInfo.replacement}`
                        : null;

                    const message = `Token "${token}" is deprecated.${replacementToken ? ` Use "${replacementToken}" instead.` : ' Please update to a supported token.'}`;

                    report({
                        ruleName,
                        result,
                        message,
                        node: decl,
                        word: token,
                    });
                    return;
                }

                if (!validTokensFromCSS.has(tokenWithoutPrefix)) {
                    report({
                        ruleName,
                        result,
                        message: `Token "${token}" is not a valid pie token.`,
                        node: decl,
                        word: token,
                    });
                }
            });
        });
    };
}

ruleFunction.ruleName = ruleName;

export default createPlugin(ruleName, ruleFunction);
