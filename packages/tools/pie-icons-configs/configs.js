export const sizeToValueMap = {
    xs: 16,
    s: 20,
    m: 24,
    l: 28,
    xl: 32,
    xxl: 40,
};

export const regularIconSizes = Object.keys(sizeToValueMap);
export const regularIconSizeDefault = 'xs';
export const largeIconSizeModule = 8;
export const largeIconSizeDefault = 32;

/**
 * Validates the size for large icons
 * @param {number} value The current value of the size prop
 * @param {number} minimumSize The minimum size allowed for large icons
 * @param {number} moduleSize The module size for large icons
 * @returns {boolean} Whether the value is valid or not
 */
function validateLargeIconSize (value, minimumSize, moduleSize) {
    const parsedValue = parseInt(value, 10);
    const isSizeAMultiple = parsedValue % moduleSize === 0;
    const isSizeValid = parsedValue >= minimumSize && isSizeAMultiple;

    return isSizeValid;
}

export const iconSizeValidator = {
    large: (value) => validateLargeIconSize(value, largeIconSizeDefault, largeIconSizeModule),
    regular: (value) => regularIconSizes.includes(value),
};

/**
 * Validates the size for large icons
 * @param {{string|number}} sizeValue - Value of the size prop
 * @returns {{isValid: boolean, size: number}} - Object with the validation result and the normalized icon size
 */
export function validateGetLargeIconSize (sizeValue) {
    const isValid = iconSizeValidator.large(sizeValue);

    const size = isValid ? sizeValue : largeIconSizeDefault;

    return { isValid, size };
}

/**
 * Validates the size for regular icons
 * @param {string} sizeValue - Value of the size prop
 * @returns {{isValid: boolean, size: number}} - Object with the validation result and the icon size
 */
export function validateGetRegularIconSize (sizeValue) {
    const isValid = iconSizeValidator.regular(sizeValue);

    const size = isValid
        ? sizeToValueMap[sizeValue]
        : sizeToValueMap[regularIconSizeDefault];

    return { isValid, size };
}

/**
 * Returns props for the svg element based on the provided parameters
 * @param {string} svgClasses - String of classes assigned to the icon
 * @param {string} staticClasses - String of classes assigned to the component
 * @param {{string|number}} sizeValue - Value of the size prop
 * * @param {string} componentName - Name of the component
 * @returns {Object} - Object of props to be assigned to the svg element
 */

export const getSvgProps = (svgClasses, staticClasses, sizeValue, componentName) => {
    const isLargeIcon = svgClasses.endsWith('Large') || svgClasses.endsWith('-large');

    let isValid;
    let size;

    if (sizeValue) {
        ({ isValid, size } = isLargeIcon
            ? validateGetLargeIconSize(sizeValue)
            : validateGetRegularIconSize(sizeValue));

        if (!isValid) {
            const errorMessage = isLargeIcon
                ? `Invalid prop "size" value supplied to "${componentName}". The prop value should be a number equal or greater than ${largeIconSizeDefault} and multiple of ${largeIconSizeModule}.`
                : `Invalid prop "size" value supplied to "${componentName}". The prop value should be one of the following values: ${regularIconSizes.join(', ')}.`;

            console.error(errorMessage);
        }
    } else {
        size = isLargeIcon ? largeIconSizeDefault : sizeToValueMap[regularIconSizeDefault];
    }

    return {
        class: [svgClasses, staticClasses].filter(Boolean).join(' '),
        width: size,
        height: size,
    };
};
