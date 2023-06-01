/* eslint-disable @typescript-eslint/no-explicit-any */
export type PropObject = {
    [key: string]: any;
};

export type Combination = {
    [key: string]: any;
};

/**
 * Generate all possible combinations of properties for a given object.
 *
 * @param {PropObject} obj - The object containing properties for which combinations are to be generated.
 * Each property value can any data type.
 *
 * @returns {Combination[]} An array of objects, where each object is a unique combination of property values.
 */
export const getAllPropCombinations = (obj: PropObject): Combination[] => {
    const keys = Object.keys(obj);
    const combinations: Combination[] = [];

    function generatePropCombinations (prefix: any[], i: number): void {
        if (i === keys.length) {
            const combo: Combination = {};
            for (let j = 0; j < prefix.length; j++) {
                combo[keys[j]] = prefix[j];
            }
            combinations.push(combo);
            return;
        }

        const key = keys[i];
        const values = obj[key];

        if (typeof values === 'boolean') {
            generatePropCombinations(prefix.concat(true), i + 1);
            generatePropCombinations(prefix.concat(false), i + 1);
        } else if (Array.isArray(values)) {
            for (let j = 0; j < values.length; j++) {
                generatePropCombinations(prefix.concat(values[j]), i + 1);
            }
        } else {
            generatePropCombinations(prefix.concat(values), i + 1);
        }
    }

    generatePropCombinations([], 0);

    return combinations;
};

/**
 * Splits an array of component prop combinations by a particular property value.
 *
 * @param {Combination[]} combinations - The array of combinations to split.
 * @param {string} property - The property to split by.
 *
 * @returns {Record<string, Combination[]>} An object mapping each unique property value to the combinations that have it.
 */
export const splitCombinationsByPropertyValue = (combinations: Combination[], property: string): Record<string, Combination[]> => combinations
    .reduce((splitCombinations: Record<string, Combination[]>, combination: Combination) => {
        const propertyValue = combination[property];
        const propertyValueKey = String(propertyValue);

        if (!(propertyValueKey in splitCombinations)) {
            splitCombinations[propertyValueKey] = [];
        }

        // Add the current combination to the array for its property value
        splitCombinations[propertyValueKey].push(combination);

        return splitCombinations;
    }, {});

