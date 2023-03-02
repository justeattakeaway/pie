/**
 * Returns an object property value specified via a dot notation path string
 * @param {object} obj The object to query
 * @param {string} path The dot notation style path used to access the property
 * @returns {any} The object property value
 */
const getObjectPropertyByPath = (obj, path) => {
    try {
        const pathSegments = path.split('.');
        let result = { ...obj };

        for (let i = 0; i < pathSegments.length; i++) {
            result = result[pathSegments[i]];
        }

        return result;
    } catch {
        return undefined;
    }
};

/**
 * Capitalises the first letter of a string
 * @param {string} string
 * @returns {string}
 */
const capitaliseFirstLetter = (string) => {
    let capitalised = string;
    capitalised = capitalised.charAt(0).toUpperCase() + capitalised.slice(1);

    return capitalised;
};

/**
 * Checks whether value can convert to number
 * @param {string|number} value
 * @returns {boolean}
 */
const isNumber = (value) => !Number.isNaN(parseInt(value, 10));

module.exports = {
    stringHelpers: {
        capitaliseFirstLetter,
    },
    objectHelpers: {
        getObjectPropertyByPath,
    },
    numberHelpers: {
        isNumber,
    },
};
