/* eslint-disable @typescript-eslint/no-explicit-any */
type PropObject = {
    [key: string]: boolean | any[];
};

type Combination = {
    [key: string]: boolean | any;
};

/**
 * Generate all possible combinations of properties for a given object.
 *
 * @param {PropObject} obj - The object containing properties for which combinations are to be generated.
 * Each property value can be a boolean or an array of any data type.
 *
 * @returns {Combination[]} An array of objects, where each object is a unique combination of property values.
 */
export function getAllPropCombinations (obj: PropObject): Combination[] {
    // Get the keys from the passed object
    const keys = Object.keys(obj);
    // Initialize an array to store all combinations
    const combinations: Combination[] = [];

    // Helper function to generate combinations recursively
    function helper (prefix: (boolean | any)[], i: number): void {
        // If all keys have been processed, we've found a new combination
        if (i === keys.length) {
            // Initialize a new combination object
            const combo: Combination = {};
            // Assign each key-value pair to the new combination object
            for (let j = 0; j < prefix.length; j++) {
                combo[keys[j]] = prefix[j];
            }
            // Add the new combination to the result array
            combinations.push(combo);
            return;
        }

        // Get the current key and its corresponding value
        const key = keys[i];
        const values = obj[key];

        // If the value is a boolean, recurse with both true and false
        if (typeof values === 'boolean') {
            helper(prefix.concat(true), i + 1);
            helper(prefix.concat(false), i + 1);
        } else if (Array.isArray(values)) {
            // If the value is an array, recurse with each value in the array
            for (let j = 0; j < values.length; j++) {
                helper(prefix.concat(values[j]), i + 1);
            }
        }
    }

    // Start the helper function with an empty prefix and at the first key
    helper([], 0);

    return combinations;
}
