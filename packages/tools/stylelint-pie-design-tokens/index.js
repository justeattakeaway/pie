import stylelint from 'stylelint';
import { readFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { createPlugin, utils: { report, validateOptions } } = stylelint;

const ruleName = '@justeattakeaway/stylelint-pie-design-tokens';

/**
 * Traverse tokens metadata recursively
 */
function traverse (obj, path, tokens) {
    Object.entries(obj).forEach(([key, value]) => {
        if (!value || typeof value !== 'object') return;

        const newPath = [...path, key];
        const isToken = value.value !== undefined || value.category || value.status;

        if (isToken) {
            const tokenName = newPath
                .filter((p) => p !== 'global' && p !== 'alias')
                .join('-');

            tokens.set(tokenName, {
                category: path[0] || '',
                isDeprecated: value.status?.name === 'deprecated',
                replacement: value.status?.replacementToken,
            });
        } else {
            traverse(value, newPath, tokens);
        }
    });
}

/**
 * Load and normalize tokens metadata
 */
function getTokens () {
    try {
        const metadataPath = require.resolve('@justeat/pie-design-tokens/metadata/tokensMetadata.json');
        const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));

        const tokens = new Map();
        traverse(metadata, [], tokens);

        return tokens;
    } catch (error) {
        return new Map();
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

        const tokens = getTokens();

        root.walkDecls((decl) => {
            const regex = new RegExp('--(dt|xds)-([a-z0-9-]+)', 'gi');
            const matches = decl.value.matchAll(regex);

            Array.from(matches).forEach((match) => {
                const [token, prefix, tokenWithoutPrefix] = match;
                const tokenInfo = tokens.get(tokenWithoutPrefix);

                if (!tokenInfo) {
                    report({
                        ruleName,
                        result,
                        message: `Token "${token}" is not a valid pie token.`,
                        node: decl,
                        word: token,
                    });
                    return;
                }

                if (tokenInfo.isDeprecated) {
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
                }
            });
        });
    };
}

ruleFunction.ruleName = ruleName;

export default createPlugin(ruleName, ruleFunction);
