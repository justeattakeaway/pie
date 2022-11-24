const sass = require('sass');
const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');
const { stringHelpers, objectHelpers } = require('../../utilities');

const convertHexToRBG = hex => {
    // padd a 3char hex to 6
    if (!hex.includes('|')) {
        try {
            let strippedHex = hex.replace('#', '');
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
        } catch (err) {
            return null;
        }
    }

    return null;
};

const createToken = (tokenKey, prefix) => `$${prefix}-${tokenKey}`;

const createTokenDisplayName = (tokenKey, prefix) => {
    // Some tokens don't require a prefix in front of their display names
    const prefixExcludes = ['color'];
    const shouldShowPrefix = prefix && !prefixExcludes.includes(prefix);
    const tokenNameSegments = tokenKey.split('-');
    const capitalizedNameSegments = tokenNameSegments.map(nameSegment => stringHelpers.capitalizeFirstLetter(nameSegment));

    return shouldShowPrefix ? `${stringHelpers.capitalizeFirstLetter(prefix)} ${capitalizedNameSegments.join(' ')}` : capitalizedNameSegments.join(' ');
};

const createTokenExampleElement = ({ token }) => `<div class="c-tokensTable-example" style="--example-background-color:${token}";></div>`;

const createTokenPill = ({ token, tokenKey }) => {
    let modifierClass = null;
    const tokenRGB = convertHexToRBG(token);
    console.log(token);
    console.log(tokenRGB);
    if (tokenRGB) {
        const color = new sass.SassColor(tokenRGB);
        if (color.lightness < 40) {
            modifierClass = ' c-tokensTable-token--light';
        }
    }

    return `<span class="c-tokensTable-token${modifierClass || ''}">${tokenKey}</span>`;
};

const createItem = config => {
    const example = createTokenExampleElement(config);
    const tokenPill = createTokenPill(config);

    return `<li class="c-tokensTable-row c-tokensTable-item">
      ${example}
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
        tokenKey: createToken(key, config.prefix),
        tokenDisplayName: createTokenDisplayName(key, config.prefix),
        prefix: config.prefix // TODO: Could be done programmatically
    }));

    return `<div class="c-tokensTable">${createList(tokenItemElements)}</div>`;
};
