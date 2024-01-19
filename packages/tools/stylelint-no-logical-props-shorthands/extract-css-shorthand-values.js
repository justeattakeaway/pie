const { parse, stringify } = require('scss-parser');
const createQueryWrapper = require('query-ast');

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
