import stylelint from 'stylelint';
import { readFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { createPlugin, utils: { report, validateOptions } } = stylelint;

const ruleName = '@justeattakeaway/pie-design-tokens';

const pieTokenPattern = /--dt-([a-z0-9-]+)/gi;
const calcWrappedPattern = /calc\(\s*var\(|#\{p\.(font-size|line-height)\(/;
const fontTokenPattern = /--dt-font-.*(?:size|line-height)/i;

const filteredPathSegments = new Set(['global', 'alias', 'default']);

/**
 * Parse CSS content and collect custom property names into the provided set.
 */
function parseTokensFromCSS (cssContent, tokens = new Set()) {
    pieTokenPattern.lastIndex = 0;
    let match = pieTokenPattern.exec(cssContent);

    while (match !== null) {
        tokens.add(match[1]);
        match = pieTokenPattern.exec(cssContent);
    }

    return tokens;
}

/**
 * Recursively traverse token metadata to build a map of token details.
 */
function traverseMetadata (obj, path, tokens, isGlobal) {
    Object.entries(obj).forEach(([key, value]) => {
        if (!value || typeof value !== 'object') return;

        const newPath = [...path, key];
        const currentIsGlobal = isGlobal || key === 'global';

        if (value.description !== undefined) {
            const tokenName = newPath
                .filter((p) => !filteredPathSegments.has(p))
                .join('-');

            tokens.set(tokenName, {
                isDeprecated: value.status?.name === 'deprecated',
                replacement: value.status?.replacementToken,
                category: path[0] || '',
                isGlobal: currentIsGlobal,
            });
        } else {
            traverseMetadata(value, newPath, tokens, currentIsGlobal);
        }
    });
}

let cachedTokenData = null;

/**
 * Load and cache token data from CSS files and metadata JSON.
 * File I/O only happens once per process.
 */
function getTokens () {
    if (cachedTokenData) return cachedTokenData;

    try {
        const loadFile = (path) => readFileSync(require.resolve(path), 'utf8');

        const validTokensFromCSS = parseTokensFromCSS(loadFile('@justeat/pie-design-tokens/dist/jet.css'));
        parseTokensFromCSS(loadFile('@justeat/pie-design-tokens/dist/jet-hsl-colors.css'), validTokensFromCSS);

        try {
            // pie-css defines extra tokens (e.g. z-index). Only loaded if installed.
            parseTokensFromCSS(loadFile('@justeattakeaway/pie-css/css/input.css'), validTokensFromCSS);
        } catch { /* skip if not installed */ }

        const metadata = JSON.parse(loadFile('@justeat/pie-design-tokens/metadata/tokensMetadata.json'));
        const tokens = new Map();
        traverseMetadata(metadata, [], tokens, false);

        cachedTokenData = { tokens, validTokensFromCSS };
    } catch (error) {
        console.error(`[stylelint:${ruleName}] Failed to load token data:`, error.message);
        cachedTokenData = { tokens: new Map(), validTokensFromCSS: new Set() };
    }

    return cachedTokenData;
}

/**
 * Report any global, deprecated, or invalid PIE tokens found in a declaration.
 */
function reportTokenIssues (decl, result, tokens, validTokensFromCSS) {
    const { value: declValue } = decl;

    pieTokenPattern.lastIndex = 0;
    let match = pieTokenPattern.exec(declValue);

    while (match !== null) {
        const [token, tokenWithoutPrefix] = match;
        const tokenInfo = tokens.get(tokenWithoutPrefix);
        const isMotion = tokenInfo?.category === 'motion';
        const isGlobalFontFamily = tokenWithoutPrefix.startsWith('font-family');

        // Skip motion as no alias tokens exist for it and global font family tokens as they might be used globally when defining @font faces.
        if (tokenInfo?.isGlobal && !isMotion && !isGlobalFontFamily) {
            report({
                ruleName,
                result,
                message: `Avoid global token "${token}". Use PIE alias tokens instead.`,
                node: decl,
                word: token,
            });
        } else if (tokenInfo?.isDeprecated) {
            const replacementToken = tokenInfo.replacement
                ? `--dt-${tokenInfo.category}-${tokenInfo.replacement}`
                : null;

            report({
                ruleName,
                result,
                message: `Token "${token}" is deprecated.${replacementToken ? ` Use "${replacementToken}" instead.` : ' Please update to a supported token.'}`,
                node: decl,
                word: token,
            });
        } else if (!validTokensFromCSS.has(tokenWithoutPrefix)) {
            report({
                ruleName,
                result,
                message: `Token "${token}" is not a valid pie token.`,
                node: decl,
                word: token,
            });
        }

        match = pieTokenPattern.exec(declValue);
    }
}

/**
 * Report if a font size/line-height token is used without calc() wrapping.
 */
function reportFontCalcIssue (decl, result) {
    const { prop, value: declValue } = decl;

    if (prop.startsWith('--')) return;

    if (fontTokenPattern.test(declValue) && !calcWrappedPattern.test(declValue)) {
        report({
            ruleName,
            result,
            message: `Font token in "${prop}" must be wrapped in calc(), e.g., calc(var(--dt-font-...) * 1px).`,
            node: decl,
            word: declValue,
        });
    }
}

/**
 * Stylelint plugin to validate PIE design token usage.
 */
function ruleFunction (primaryOption) {
    return function lint (root, result) {
        const validOptions = validateOptions(result, ruleName, { actual: primaryOption });

        if (!validOptions) return;

        const { tokens, validTokensFromCSS } = getTokens();

        root.walkDecls((decl) => {
            reportTokenIssues(decl, result, tokens, validTokensFromCSS);
            reportFontCalcIssue(decl, result);
        });
    };
}

ruleFunction.ruleName = ruleName;

export default createPlugin(ruleName, ruleFunction);
