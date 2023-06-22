import {
    regularIconSizeDefault,
    largeIconSizeDefault,
    iconSizeValidator,
    getSvgProps,
} from './configs.js'; // eslint-disable-line import/extensions

/**
 * Object with iconSize props configuration for large and regular icons
 */
export const iconSize = {
    large: {
        type: [Number],
        default: largeIconSizeDefault,
        validator: iconSizeValidator.large,
    },
    regular: {
        type: [String],
        default: regularIconSizeDefault,
        validator: iconSizeValidator.regular,
    },
};

/**
 * Update Vue icon component context data based on the provided svgClasses and current props, such as class
 * @param {Object} ctx - Vue icon component context
 * @param {string} svgClasses - String of classes assigned to the component
 * @returns {Object} - Updated context data
 */
export const updateContextData = (ctx, svgClasses, componentName) => {
    const { staticClass } = ctx.data;
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { width, height, ...rest } = ctx.data.attrs || {};
    /* eslint-enable @typescript-eslint/no-unused-vars */

    const props = getSvgProps(svgClasses, staticClass, ctx.props.iconSize, componentName);

    ctx.data.attrs = { ...rest, ...props };
    ctx.data.staticClass = ctx.data.attrs.class; // Necessary otherwise classes assigned in markup override the ones assigned in getSvgProps

    return ctx.data;
};
