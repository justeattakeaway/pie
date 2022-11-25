const sass = require('sass');
const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');
const { stringHelpers, objectHelpers } = require('../../utilities');
const tokenPrefixes = require('../../_data/tokenPrefixes');

// TODO - add borders to light colours (on wide screens) (future work)
// TODO - add unit tests for colour logic
// TODO - extract color specific logic into its own module

const createScssTokenName = (tokenKey, prefix) => `$${prefix}-${tokenKey}`;

const createTokenDisplayName = (tokenKey, prefix) => {
    // Some tokens don't require a prefix in front of their display names
    const prefixExcludes = [tokenPrefixes.color];
    const shouldShowPrefix = prefix && !prefixExcludes.includes(prefix);
    const tokenNameSegments = tokenKey.split('-');
    const capitalisedNameSegments = tokenNameSegments.map(nameSegment => stringHelpers.capitaliseFirstLetter(nameSegment));

    return shouldShowPrefix
        ? `${stringHelpers.capitaliseFirstLetter(prefix)} ${capitalisedNameSegments.join(' ')}`
        : capitalisedNameSegments.join(' ');
};

const createTokenExampleElement = ({ token }) => {
    const colorTokenSegments = token.split('|');
    let cssVariable = `--example-background-color: ${token}`;
    const classes = ['c-tokensTable-example'];

    if (colorTokenSegments.length === 2) {
        const [, opacity] = colorTokenSegments;
        cssVariable = `--example-checked-opacity: ${opacity}`;
        classes.push('c-tokensTable-example--checked');
    }

    return `<div class="${classes.join(' ')}" style="${cssVariable}";></div>`;
};

const convertHexToRBG = hex => {
    // padd a 3char hex to 6
    const [hexWithoutOpacity,] = hex.split('|');
    // handle pipes
    let strippedHex = hexWithoutOpacity.replace('#', '');
    if (strippedHex.length === 3) {
        strippedHex += strippedHex; // so lazy - means an input of #000 will become 000000
    }
    const aRgbHex = strippedHex.match(/.{1,2}/g);
    const aRgb = {
        red: parseInt(aRgbHex[0], 16),
        green: parseInt(aRgbHex[1], 16),
        blue: parseInt(aRgbHex[2], 16)
    };

    return aRgb;
};

const calculateColourLightness = hexCode => {
    let color;
    const rgb = convertHexToRBG(hexCode);
    console.log(rgb);
    color = new sass.SassColor(rgb);
    // console.log(hexCode);

    return color.lightness;
};

const createTokenPill = ({ token, tokenScssName }) => {
    const classes = ['c-tokensTable-token'];
    const tokenLightness = calculateColourLightness(token);

    if (tokenLightness < 40) {
        classes.push('c-tokensTable-token--light');
    }

    return `<span class="${classes.join(' ')}">${tokenScssName}</span>`;
};

const createItem = config => {
    const tokenPill = createTokenPill(config);
    const tokenExampleElement = createTokenExampleElement(config);

    return `<li class="c-tokensTable-row c-tokensTable-item">
      ${tokenExampleElement}
      <div class="c-tokensTable-content">
        <span class="c-tokensTable-displayName">${config.tokenDisplayName}</span>
        <span>${config.copy}</span>
        <span>global token used: <span>some token</span></span>
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

// eslint-disable-next-line func-names
module.exports = function (config) {
    const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, config.path);
    const tokenItemElements = Object.keys(tokens).map(key => createItem({
        token: tokens[key],
        copy: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', // TODO: may be a function to produce the copy
        tokenScssName: createScssTokenName(key, config.prefix),
        tokenDisplayName: createTokenDisplayName(key, config.prefix),
        prefix: config.prefix
    }));

    return `<div class="c-tokensTable">${createList(tokenItemElements)}</div>`;
};
