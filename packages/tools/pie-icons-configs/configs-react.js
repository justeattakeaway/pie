import { getSvgProps } from './configs.js'; // eslint-disable-line import/extensions

/**
 * Converts the result of getSvgProps to return className instead of class attr
 * @param {string} svgClasses - String of classes assigned to the icon
 * @param {string} staticClasses - String of classes assigned to the component
 * @param {{string|number}} iconSizeValue - Value of the iconSize prop
 * @param {string} componentName - Name of the component
 * @returns {Object} - Object of props to be assigned to the svg element
 */

export const getReactSvgProps = (svgClasses, staticClasses, iconSizeValue, componentName) => {
    const result = getSvgProps(svgClasses, staticClasses, iconSizeValue, componentName);

    return {
        className: result.class,
        width: result.width,
        height: result.height,
    };
};
