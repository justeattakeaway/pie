export const sizeToClassMap = {
    xs: 'c-pieIcon--xs',
    s: 'c-pieIcon--s',
    m: 'c-pieIcon--m',
    l: 'c-pieIcon--l',
    xl: 'c-pieIcon--xl',
    xxl: 'c-pieIcon--xxl',
};

export const regularIconSizes = Object.keys(sizeToClassMap);
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

    if (!isValid) {
        const parsedValue = parseInt(iconSizeValue, 10) || 0;
        // Ensure the size is a multiple of module
        const multipleOfModule = Math.floor(parsedValue / largeIconSizeModule) * largeIconSizeModule;
        // Ensure to return the default size if the size is smaller than the default size
        const normalizedIconSize = Math.max(multipleOfModule, largeIconSizeDefault);

        return { isValid: false, iconSize: normalizedIconSize };
    }

    return { isValid: true, iconSize: iconSizeValue };
}

/**
 * Validates the iconSize for regular icons
 * @param {string} iconSizeValue - Value of the iconSize prop
 * @returns {{isValid: boolean, iconSizeClass: string}} - Object with the validation result and the icon size class
 */
export function validateGetRegularIconClass (iconSizeValue) {
    const isValid = iconSizeValidator.regular(iconSizeValue);

    if (!isValid) {
        const iconSizeClass = sizeToClassMap[regularIconSizeDefault];
        return { isValid: false, iconSizeClass };
    }

    const iconSizeClass = sizeToClassMap[iconSizeValue];

    return { isValid: true, iconSizeClass };
}
