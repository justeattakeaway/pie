import stylelint from 'stylelint';
import { readFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { createPlugin, utils: { report, validateOptions, ruleMessages } } = stylelint;

const ruleName = '@justeattakeaway/stylelint-no-deprecated-tokens';
const messages = ruleMessages(ruleName, {
    deprecated: (token, replacement) => `Token "${token}" is deprecated. ${replacement ? `Use "${replacement}" instead.` : 'Please update to a supported token.'}`,
});

/**
 * Load and parse the tokens metadata
 * @returns {Object} Parsed tokens metadata
 */
function loadTokensMetadata () {
    try {
        const metadataPath = require.resolve('@justeat/pie-design-tokens/metadata/tokensMetadata.json');
        return JSON.parse(readFileSync(metadataPath, 'utf8'));
    } catch (error) {
        return {};
    }
}

/**
 * Build a map of deprecated tokens from the metadata
 * @param {Object} metadata - The tokens metadata object
 * @returns {Map} Map of deprecated token names to their replacement info
 */
function buildDeprecatedTokensMap (metadata) {
    const deprecatedTokens = new Map();

    function traverse (obj, path = []) {
        Object.entries(obj).forEach(([key, value]) => {
            if (value && typeof value === 'object') {
                if (value?.status?.name === 'deprecated') {
                    const filteredPath = [...path, key].filter((p) => p !== 'global' && p !== 'alias');
                    const tokenName = filteredPath.join('-');

                    const category = path[0] || '';

                    deprecatedTokens.set(tokenName, {
                        replacement: value.status.replacementToken,
                        message: value.status.message,
                        category,
                    });
                } else if (!value.status && !value.category && !value.description) {
                    traverse(value, [...path, key]);
                }
            }
        });
    }

    traverse(metadata);
    return deprecatedTokens;
}

/**
 * Stylelint plugin to detect deprecated PIE design tokens
 * @param {Boolean} primaryOption - Enables the plugin
 * @param {Object} secondaryOptions - Plugin options
 * @param {string} secondaryOptions.prefix - Token prefix to check (default: 'dt')
 * @returns {Function} Lint function
 */
function ruleFunction (primaryOption, secondaryOptions = {}) {
    const prefix = secondaryOptions.prefix || 'dt';

    return function lint (root, result) {
        const validOptions = validateOptions(result, ruleName, { actual: primaryOption });

        if (!validOptions) return;

        const metadata = loadTokensMetadata();
        const deprecatedTokens = buildDeprecatedTokensMap(metadata);

        if (deprecatedTokens.size === 0) {
            return;
        }

        root.walkDecls((decl) => {
            const regex = new RegExp(`--${prefix}-([a-z0-9-]+)`, 'gi');
            const matches = decl.value.matchAll(regex);

            Array.from(matches).forEach((match) => {
                const [, tokenName] = match;

                if (deprecatedTokens.has(tokenName)) {
                    const { replacement, category } = deprecatedTokens.get(tokenName);
                    const replacementToken = replacement
                        ? `--${prefix}-${category}-${replacement}`
                        : null;

                    const originalToken = `--${prefix}-${tokenName}`;
                    report({
                        ruleName,
                        result,
                        message: messages.deprecated(originalToken, replacementToken),
                        node: decl,
                        word: originalToken,
                    });
                }
            });
        });
    };
}

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;

export default createPlugin(ruleName, ruleFunction);
