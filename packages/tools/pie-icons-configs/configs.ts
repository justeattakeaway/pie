// TODO: DSW-1025 - Use this file instead of the JS file
export const regularIconSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
export type RegularIconSize = typeof regularIconSizes[number];
export type LargeIconSize = number | string;

export const sizeToValueMap : Record<RegularIconSize, number> = {
    xs: 16,
    s: 20,
    m: 24,
    l: 28,
    xl: 32,
    xxl: 40,
};

export const regularIconSizeDefault : RegularIconSize = 'xs';
export const largeIconSizeModule = 8;
export const largeIconSizeDefault = 32;

/**
 * Validates the size for large icons
 * @param {number} value The current value of the size prop
 * @param {number} minimumSize The minimum size allowed for large icons
 * @param {number} moduleSize The module size for large icons
 * @returns {boolean} Whether the value is valid or not
 */
function validateLargeIconSize (value: LargeIconSize, minimumSize: number, moduleSize: number) {
    let parsedValue: number;

    if (typeof value === 'string') {
        parsedValue = parseInt(value, 10);
    } else {
        parsedValue = value;
    }

    const isSizeAMultiple = parsedValue % moduleSize === 0;
    const isSizeValid = parsedValue >= minimumSize && isSizeAMultiple;

    return isSizeValid;
}

export const iconSizeValidator = {
    large: (value : LargeIconSize) => validateLargeIconSize(value, largeIconSizeDefault, largeIconSizeModule),
    regular: (value : RegularIconSize) => regularIconSizes.includes(value),
};

/**
 * Validates the size for large icons
 * @param {{LargeIconSize}} sizeValue - Value of the size prop
 * @returns {{isValid: boolean, size: number}} - Object with the validation result and the normalized icon size
 */
export function validateGetLargeIconSize (sizeValue : LargeIconSize) {
    let size = largeIconSizeDefault;
    const isValid = iconSizeValidator.large(sizeValue);

    if (isValid) {
        if (typeof sizeValue === 'string') {
            size = parseInt(sizeValue, 10);
        } else {
            size = sizeValue;
        }
    }

    return { isValid, size };
}

/**
 * Validates the size for regular icons
 * @param {Size} sizeValue - Value of the size prop
 * @returns {{isValid: boolean, size: number}} - Object with the validation result and the icon size
 */
export function validateGetRegularIconSize (sizeValue : RegularIconSize) {
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
 * @param {{LargeIconSize}} sizeValue - Value of the size prop
 * * @param {string} componentName - Name of the component
 * @returns {Object} - Object of props to be assigned to the svg element
 */

export const getSvgProps = (svgClasses: string, staticClasses: string, sizeValue: RegularIconSize | LargeIconSize | null, componentName: string) => {
    const isLargeIcon = svgClasses.endsWith('Large') || svgClasses.endsWith('-large');

    let isValid;
    let size;

    if (sizeValue) {
        ({ isValid, size } = isLargeIcon
            ? validateGetLargeIconSize(sizeValue as LargeIconSize)
            : validateGetRegularIconSize(sizeValue as RegularIconSize));

        if (!isValid) {
            const errorMessage = isLargeIcon
                ? `Invalid prop "size" value supplied to "${componentName}". The prop value should be a number equal or greater than ${largeIconSizeDefault} and multiple of ${largeIconSizeModule}.`
                : `Invalid prop "size" value supplied to "${componentName}". The prop value should be one of the following values: ${regularIconSizes.join(', ')}.`;

            console.error(errorMessage);
        }
    } else {
        size = isLargeIcon
            ? largeIconSizeDefault
            : sizeToValueMap[regularIconSizeDefault];
    }

    return {
        class: [svgClasses, staticClasses].filter(Boolean).join(' '),
        width: size,
        height: size,
    };
};

/**
 * Normalizes a component name by removing any hyphens
 * directly before digits in the passed string
 * For example: over-18-filled-large
 * Without this normlization the PascalCase generation would return Over-16Filled
 * @param {string} name - a string, for example an icon name
 * @returns {string}
 */
export const normalizeIconName = (name: string) => name.replace(/\-(\d+)/, '$1'); // eslint-disable-line no-useless-escape
