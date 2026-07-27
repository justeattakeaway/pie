function renderProp (propName, value, defaultValue) {
    const framework = process.env.FRAMEWORK;

    // No need to set the prop if it is already set as the default
    if (value === defaultValue) return '';

    const isObject = typeof value === 'object' && value !== null;

    // React only formatting
    if (framework === 'react') {
        if (isObject) {
            const entries = Object.entries(value);
            return `${propName}={{${entries.map(([key, val]) => {
                const _val = val !== null ? val : 'NULL';
                return `${key}: "${_val}"`;
            }).join(', ')}}}`;
        }

        // Renders boolean, string, number values
        // This API is sensible to null values and it breaks the output
        // Having a fallback return set as 'NULL' helps to catch issues
        // like missing props or layers
        if (value === null) {
            return figma.helpers.react.renderProp(propName, 'NULL');
        }
        return figma.helpers.react.renderProp(propName, value);
    }

    // Web formatting
    if (isObject) return `${propName}='${JSON.stringify(value)}'`;

    if (typeof value === 'boolean') {
        if (value === true) return propName;
        return '';
    }

    return `${propName}="${value}"`;
}

module.exports = renderProp;
