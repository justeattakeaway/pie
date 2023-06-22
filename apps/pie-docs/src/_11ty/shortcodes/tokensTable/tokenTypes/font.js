/**
 * Splits a font/typography token into a parsable css value
 * @param {object|string} token - the token value i.e. {"size": "48|56","weight": "ExtraBold","text-decoration": "underline", ...fontProperties} or
 * size/weight values as string such as "12|16" "Regular"
 * @param {object} tokenMetadata - the metadata for the token. data such as descriptions
 * @returns {object} an object containing the font styles of the token.
 */
const splitFontAliasToken = (token, tokenMetadata) => {
    const isGlobal = typeof token === 'string' || Object.keys(token).length === 2;
    const { category } = tokenMetadata;
    const fontWeightMap = {
        Regular: 400,
        Bold: 700,
        ExtraBold: 800,
    };

    if (isGlobal) {
        return {
            fontFamily: category === 'fontFamily' && token,
            fontSize: category === 'fontSize' && token['font-size'],
            lineHeight: category === 'fontSize' && token['line-height'],
            fontWeight: category === 'fontWeight' && fontWeightMap[token],
            textDecoration: category === 'fontStyle' && token,
            letterSpacing: category === 'letterSpacing' && token,
            paragraphSpacing: category === 'paragraphSpacing' && token,
        };
    }

    return {
        fontFamily: token.family,
        fontSize: token.size['font-size'],
        lineHeight: token.size['line-height'],
        fontWeight: fontWeightMap[token.weight],
        textDecoration: token['text-decoration'],
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
const buildFontExample = (token, tokenMetadata) => {
    const {
        fontFamily,
        fontSize,
        lineHeight,
        fontWeight,
        textDecoration,
        letterSpacing,
        paragraphSpacing,
    } = splitFontAliasToken(token, tokenMetadata);
    const classes = ['c-tokensTable-example--font'];
    const cssVariables = [
        fontFamily && `--example-font-family: ${fontFamily}`,
        fontSize && `--example-font-size: ${fontSize}px`,
        lineHeight && `--example-font-line-height: ${lineHeight}px`,
        fontWeight && `--example-font-weight: ${fontWeight}`,
        textDecoration && `--example-font-text-decoration: ${textDecoration}`,
        letterSpacing && `--example-font-letter-spacing: ${letterSpacing}`,
        paragraphSpacing && `--example-font-paragraph-spacing: ${paragraphSpacing}px`,
    ].filter(Boolean);

    if (paragraphSpacing) classes.push('c-tokenTable-example-paragraph--font');

    const content = paragraphSpacing ? '<p>Paragraph</p><p>Paragraph</p>' : 'String';

    return `<div class="${classes.join(' ')}" style="${cssVariables.join('; ')}">${content}</div>`;
};

module.exports = {
    buildFontExample,
};
