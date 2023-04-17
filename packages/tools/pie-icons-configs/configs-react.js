import {
    regularIconSizes, largeIconSizeModule, largeIconSizeDefault, validateGetLargeIconSize, validateGetRegularIconClass,
} from './configs.js'; // eslint-disable-line import/extensions

/**
 * Returns props for the svg element based on the provided parameters
 * @param {string} svgClasses - String of classes assigned to the icon
 * @param {string} staticClass - Classname String assigned to the component
 * @param {{string|number}} iconSizeValue - Value of the iconSize prop
 * @param {string} componentName - Name of the component
 * @returns {Object} - Object of props to be assigned to the svg element
 */
export function getSvgProps (svgClasses, staticClass, iconSizeValue, componentName) {
    const isLargeIcon = svgClasses.endsWith('-large');

    if (isLargeIcon) {
        const { isValid, iconSize } = validateGetLargeIconSize(iconSizeValue);

        if (!isValid) {
            console.error(`Invalid prop "iconSize" value supplied to "${componentName}". The prop value should be a number equal or greater than ${largeIconSizeDefault} and multiple of ${largeIconSizeModule}.`);
        }

        return {
            className: [svgClasses, staticClass].filter(Boolean).join(' '),
            width: iconSize,
            height: iconSize,
        };
    }

    const { isValid, iconSizeClass } = validateGetRegularIconClass(iconSizeValue);

    if (!isValid) {
        console.error(`Invalid prop "iconSize" value supplied to "${componentName}". The prop value should be one of the following values: ${regularIconSizes.join(', ')}.`);
    }

    return {
        className: [svgClasses, iconSizeClass, staticClass].filter(Boolean).join(' '),
    };
}
