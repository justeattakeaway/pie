const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');
const { stringHelpers, objectHelpers } = require('../../utilities/helpers');
const tokenTypes = require('../../_data/tokenTypes');
const { isColorDark } = require('../../utilities/colors');

const createScssTokenName = (tokenKey, tokenType) => `$${tokenType}-${tokenKey}`;

const createTokenDisplayName = (tokenKey, tokenType) => {
    // Some tokens don't require a prefix in front of their display names
    const prefixExcludes = [tokenTypes.color];
    const shouldShowPrefix = tokenType && !prefixExcludes.includes(tokenType);
    const tokenNameSegments = tokenKey.split('-');
    const capitalisedNameSegments = tokenNameSegments.map(nameSegment => stringHelpers.capitaliseFirstLetter(nameSegment));

    return shouldShowPrefix
        ? `${stringHelpers.capitaliseFirstLetter(tokenType)} ${capitalisedNameSegments.join(' ')}`
        : capitalisedNameSegments.join(' ');
};

const splitColorToken = token => {
    const [hexcode, opacity] = token.split('|');

    return {
        hexcode,
        opacity
    };
};

const createColorExample = token => {
    const tokenValues = splitColorToken(token);
    let cssVariable = `--example-background-color: ${tokenValues.hexcode}`;
    const classes = ['c-tokensTable-example'];

    if (tokenValues.opacity) {
        cssVariable = `--example-checked-opacity: ${tokenValues.opacity}`;
        classes.push('c-tokensTable-example--checked');
    }

    if (!isColorDark(tokenValues.hexcode)) {
        classes.push('c-tokensTable-example--bordered');
    }

    return `<div class="${classes.join(' ')}" style="${cssVariable}";></div>`;
};

const createTokenExampleElement = ({ token, tokenType }) => {
    switch (tokenType) {
        case tokenTypes.color:
            return createColorExample(token);
        default:
            throw new Error(`token type not recognised: ${tokenType}. Token:${token}`);
    }
};

const createTokenPill = ({ tokenScssName }) => {
    const classes = ['c-tokensTable-token'];
    return `<span class="${classes.join(' ')}">${tokenScssName}</span>`;
};

const createItem = config => {
    const tokenPill = createTokenPill(config);
    const tokenExampleElement = createTokenExampleElement(config);

    return `<li class="c-tokensTable-row c-tokensTable-item">
      ${tokenExampleElement}
      <div class="c-tokensTable-content">
        <span class="c-tokensTable-displayName">${config.tokenDisplayName}</span>
        <span></span>
        <span></span>
      </div>
      ${tokenPill}
    </li>`;
};

const createList = listElements => `<div class="c-tokensTable-row u-spacing-e--top u-hideBelowOrAtWide c-tokensTable-heading">
  <span>Example</span>
  <span>Description</span>
  <span>Token name</span>
</div>
<ul class="c-tokensTable-list">
  ${listElements.join('')}
</ul>`;

const validateConfiguration = ({ path, tokenType }) => {
    const invalidParameters = [];
    if (!path) {
        invalidParameters.push('path');
    }

    if (!tokenType) {
        invalidParameters.push('tokenType');
    }

    if (invalidParameters.length) {
        throw new Error(`Missing configuration parameters: ${invalidParameters.join(', ')}`);
    }
};

// eslint-disable-next-line func-names
module.exports = function ({ path, tokenType }) {
    validateConfiguration({ path, tokenType });
    const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, path);
    const tokenItemElements = Object.keys(tokens).map(key => createItem({
        token: tokens[key],
        tokenScssName: createScssTokenName(key, tokenType),
        tokenDisplayName: createTokenDisplayName(key, tokenType),
        tokenType
    }));

    return `<div class="c-tokensTable">${createList(tokenItemElements)}</div>`;
};
