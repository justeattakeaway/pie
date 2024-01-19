const { parse, stringify } = require('scss-parser');
const createQueryWrapper = require('query-ast');

/**
 * The function `extractCSSShorthandValues` takes a CSS shorthand property name and value as input,
 * parses the value into individual values, and returns an array of the extracted values.
 * @param propName - a string that represents the name of the CSS property
 * @param propValue - the string value of a CSS shorthand property that you want to extract individual values from
 * @returns an array of extracted values from a CSS shorthand property.
 */
function extractCSSShorthandValues (propName, propValue) {
    const declarationStr = `${propName}: ${propValue};`;
    const ast = parse(declarationStr);

    const [declaration] = ast.value;
    const declarationValues = declaration.value.find(({ type }) => type === 'value').value;

    // Extract each individual value into an array item
    const extractedValues = declarationValues
        .reduce((acc, item) => {
            const partialScssValue = stringify(createQueryWrapper(item)().get(0));

            if (item.type === 'space') {
                acc.push('');
                return acc;
            }

            if (item.type === 'function') {
                acc.push(partialScssValue);
                return acc;
            }

            // Concatenate if type is not space or function
            const lastItemIndex = acc.length - 1;
            acc[lastItemIndex] = `${acc[lastItemIndex]}${partialScssValue}`;

            return acc;
        }, [''])
        .filter((item) => item !== ''); // filter out empty items

    return extractedValues;
}

module.exports = extractCSSShorthandValues;
