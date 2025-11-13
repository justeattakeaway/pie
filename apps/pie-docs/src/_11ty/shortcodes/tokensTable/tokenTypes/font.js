/**
 * Splits a font/typography token into a parsable css value
 * @param {object|string} token - the token value i.e. {"size": "48|56","weight": "ExtraBold","text-decoration": "underline", ...fontProperties} or
 * size/weight values as string such as "12|16" "Regular"
 * @param {object} tokenMetadata - the metadata for the token. data such as descriptions
 * @returns {object} an object containing the font styles of the token.
 */
const splitFontAliasToken = (token, tokenMetadata, path) => {
    const isGlobal = typeof token === 'string' || Object.keys(token).length === 2;
    const { category } = tokenMetadata;
    const fontWeightMap = {
        Regular: 400,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
        ExtraBlack: 1000,
    };
    const suffix = path.includes('wide') ? '--wide' : '--narrow';
    const size = token[`size${suffix}`] ?? token.size;
    const lineHeight = token[`line-height${suffix}`] ?? token['line-height'];

    if (isGlobal) {
        return {
            fontFamily: category === 'fontFamily' && token,
            fontSize: category === 'fontSize' && size,
            lineHeight: category === 'lineHeight' && lineHeight,
            fontWeight: category === 'fontWeight' && fontWeightMap[token],
            textDecoration: category === 'textDecoration' && token,
            fontStyle: category === 'fontStyle' && token,
            letterSpacing: category === 'letterSpacing' && token,
            paragraphSpacing: category === 'paragraphSpacing' && token,
        };
    }

    return {
        fontFamily: token.family,
        fontSize: size,
        lineHeight,
        fontWeight: fontWeightMap[token.weight],
        textDecoration: token['text-decoration'],
        fontStyle: token['font-style'],
        letterSpacing: token['letter-spacing'],
    };
};

/**
* Builds an example font/typography element to show on the token list item
 * @param {object|string} token - the token value i.e. {"size": "48|56","weight": "ExtraBold","text-decoration": "underline", ...fontProperties} or
 * size/weight values as string such as "12|16" "Regular"
 * @param {object} tokenMetadata - the metadata for the token. data such as descriptions
 * @returns {string} - the typography example HTML string
 */
const buildFontExample = (token, tokenMetadata, path) => {
    const {
        fontFamily, fontSize, lineHeight, fontWeight,
        textDecoration, fontStyle, letterSpacing, paragraphSpacing,
    } = splitFontAliasToken(token, tokenMetadata, path);
    const classes = ['c-tokensTable-example--font'];
    const cssVariables = [
        fontFamily && `--example-font-family: ${fontFamily}`,
        fontSize && `--example-font-size: ${fontSize}px`,
        lineHeight && `--example-font-line-height: ${lineHeight}px`,
        fontWeight && `--example-font-weight: ${fontWeight}`,
        textDecoration && `--example-font-text-decoration: ${textDecoration}`,
        fontStyle && `--example-font-style: ${fontStyle}`,
        letterSpacing && `--example-font-letter-spacing: ${letterSpacing}`,
        paragraphSpacing && `--example-font-paragraph-spacing: ${paragraphSpacing}px`
    ].filter(Boolean);

    if (paragraphSpacing) classes.push('c-tokenTable-example-paragraph--font');

    const content = paragraphSpacing ? '<p>Paragraph</p><p>Paragraph</p>' : 'String';

    return `<div class="${classes.join(' ')}" style="${cssVariables.join('; ')}">${content}</div>`;
};

module.exports = {
    buildFontExample,
};
