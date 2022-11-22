/**
 * Returns an object property value specified via a dot notation path string
 * @param {*} obj The object to query
 * @param {*} path The dot notation style path used to access the property
 * @returns {any} The object property value
 */
const getObjectPropertyByPath = (obj, path) => {
    const pathSegments = path.split('.');
    let result = { ...obj };

    for (let i = 0; i < pathSegments.length; i++) {
        result = result[pathSegments[i]];
    }

    return result;
};

module.exports = {
    objectHelpers: {
        getObjectPropertyByPath
    }
};
