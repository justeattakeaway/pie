import { PropObject, WebComponentPropValues } from './defs';

/**
 * Generate all possible combinations of properties for a given object.
 *
 * @param {PropObject} obj - The object containing properties for which combinations are to be generated.
 * Each property value can any data type.
 *
 * @returns {WebComponentPropValues[]} An array of objects, where each object is a unique combination of web component property values.
 */
export const getAllPropCombinations = (obj: PropObject): WebComponentPropValues[] => {
    const propertyKeys = Object.keys(obj);
    const combinationsOfPropValues: WebComponentPropValues[] = [];

    // This function generates combinations of properties from a given object.
    // It does this by recursively concatenating each property value to an 'accumulatedPropertyValues' array,
    // and adding the resulting combination to a 'WebComponentPropValues' array when it reaches the end of the keys.
    function generatePropCombinations (accumulatedPropertyValues: unknown[], i: number): void {
    // When 'i' equals the length of 'keys', we've reached the end of the keys.
    // This means we've formed a complete combination.
        if (i === propertyKeys.length) {
            // Create an empty object to hold the current WebComponentPropValues.
            const combo: WebComponentPropValues = {};
            // Loop over the 'accumulatedPropertyValues' array, which contains the property values for this combination.
            for (let j = 0; j < accumulatedPropertyValues.length; j++) {
            // Assign each value to the corresponding key in the 'combo' object.
                combo[propertyKeys[j]] = accumulatedPropertyValues[j];
            }
            // Add this combination to the 'combinationsOfPropValues' array.
            combinationsOfPropValues.push(combo);
            // End the recursion for this branch.
            return;
        }

        // Get the current key and its values from the input object.
        const propertyKey = propertyKeys[i];
        const propertyValues = obj[propertyKey];

        if (typeof propertyValues === 'boolean') {
            // If the values for this key are a boolean, we generate two combinations:
            // one with the value 'true', and one with the value 'false'.
            generatePropCombinations([...accumulatedPropertyValues, true], i + 1);
            generatePropCombinations([...accumulatedPropertyValues, false], i + 1);
        } else if (Array.isArray(propertyValues)) {
            // If the values for this key are an array, we generate a combination for each value in the array.
            for (let j = 0; j < propertyValues.length; j++) {
                generatePropCombinations([...accumulatedPropertyValues, propertyValues[j]], i + 1);
            }
        } else {
            // If the values for this key are neither a boolean nor an array,
            // we simply generate a single combination with the value as is.
            generatePropCombinations([...accumulatedPropertyValues, propertyValues], i + 1);
        }
    }

    generatePropCombinations([], 0);

    return combinationsOfPropValues;
};

/**
 * Splits an array of component prop combinations by a particular property value.
 *
 * @param {WebComponentPropValues[]} propValueCombinations - The array of combinations to split.
 * @param {string} property - The property to split by.
 *
 * @returns {Record<string, WebComponentPropValues[]>} An object mapping each unique property value to the combinations that have it.
 */
export const splitCombinationsByPropertyValue = (propValueCombinations: WebComponentPropValues[], property: string): Record<string, WebComponentPropValues[]> => propValueCombinations
    .reduce((splitCombinations: Record<string, WebComponentPropValues[]>, combination: WebComponentPropValues) => {
        const propertyValue = combination[property];
        const propertyValueKey = String(propertyValue);

        if (!(propertyValueKey in splitCombinations)) {
            splitCombinations[propertyValueKey] = [];
        }

        // Add the current combination to the array for its property value
        splitCombinations[propertyValueKey].push(combination);

        return splitCombinations;
    }, {});

