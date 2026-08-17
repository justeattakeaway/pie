function renderProp (propName, value, defaultValue) {
    const framework = process.env.FRAMEWORK;

    // No need to return the prop if the current value is the same as the default one
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
        // Instead of simply omitting a return, it's more helpful to
        // have a fallback set as 'NULL' to help catch issues
        // like missing props or layers
        if (value === null) {
            // eslint-disable-next-line no-undef
            return figma.helpers.react.renderProp(propName, 'NULL');
        }
        // eslint-disable-next-line no-undef
        return figma.helpers.react.renderProp(propName, value);
    }

    // Vue formatting
    if (framework === 'vue') {
        if (isObject) {
            const entries = Object.entries(value);
            return `:${propName}="{ ${entries.map(([key, val]) => `${key}: '${val}'`).join(', ')} }"`;
        }

        if (typeof value === 'boolean') {
            if (value === true) return propName;
            return '';
        }

        if (typeof value === 'number') return `:${propName}="${value}"`;

        return `${propName}="${value}"`;
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
