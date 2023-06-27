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
 * Validates the iconSize for large icons
 * @param {number} value The current value of the iconSize prop
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
 * Validates the iconSize for large icons
 * @param {{string|number}} iconSizeValue - Value of the iconSize prop
 * @returns {{isValid: boolean, iconSize: number}} - Object with the validation result and the normalized icon size
 */
export function validateGetLargeIconSize (iconSizeValue) {
    const isValid = iconSizeValidator.large(iconSizeValue);

    const iconSize = isValid ? iconSizeValue : largeIconSizeDefault;

    return { isValid, iconSize };
}

/**
 * Validates the iconSize for regular icons
 * @param {string} iconSizeValue - Value of the iconSize prop
 * @returns {{isValid: boolean, iconSize: number}} - Object with the validation result and the icon size
 */
export function validateGetRegularIconSize (iconSizeValue) {
    const isValid = iconSizeValidator.regular(iconSizeValue);

    const iconSize = isValid
        ? sizeToValueMap[iconSizeValue]
        : sizeToValueMap[regularIconSizeDefault];

    return { isValid, iconSize };
}

/**
 * Returns props for the svg element based on the provided parameters
 * @param {string} svgClasses - String of classes assigned to the icon
 * @param {string} staticClasses - String of classes assigned to the component
 * @param {{string|number}} iconSizeValue - Value of the iconSize prop
 * * @param {string} componentName - Name of the component
 * @returns {Object} - Object of props to be assigned to the svg element
 */

export const getSvgProps = (svgClasses, staticClasses, iconSizeValue, componentName) => {
    const isLargeIcon = svgClasses.endsWith('Large') || svgClasses.endsWith('-large') || componentName.endsWith('Large');

    let isValid;
    let iconSize;

    if (iconSizeValue) {
        ({ isValid, iconSize } = isLargeIcon
            ? validateGetLargeIconSize(iconSizeValue)
            : validateGetRegularIconSize(iconSizeValue));

        if (!isValid) {
            const errorMessage = isLargeIcon
                ? `Invalid prop "iconSize" value supplied to "${componentName}". The prop value should be a number equal or greater than ${largeIconSizeDefault} and multiple of ${largeIconSizeModule}.`
                : `Invalid prop "iconSize" value supplied to "${componentName}". The prop value should be one of the following values: ${regularIconSizes.join(', ')}.`;

            console.error(errorMessage);
        }
    } else {
        iconSize = isLargeIcon ? largeIconSizeDefault : sizeToValueMap[regularIconSizeDefault];
    }

    return {
        class: [svgClasses, staticClasses].filter(Boolean).join(' '),
        width: iconSize,
        height: iconSize,
    };
};

/**
 * Object with iconSize props configuration for large and regular icons
 */
export const iconSize = {
    large: largeIconSizeDefault,
    regular: sizeToValueMap[regularIconSizeDefault],
};

export const getDefaultIconSize = (componentName) => {
    const isLargeIcon = componentName.endsWith('Large');
    const size = isLargeIcon ? 'large' : 'regular';

    return size;
};
