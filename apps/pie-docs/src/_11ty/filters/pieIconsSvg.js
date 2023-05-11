const pieIcons = require('@justeattakeaway/pie-icons');

// eslint-disable-next-line consistent-return
const getIconByName = (iconName, iconAttributes) => {
    try {
        return pieIcons.default.icons[iconName].toSvg(iconAttributes);
    } catch (error) {
        throw new Error(`Could not find icon of name: ${iconName}. Error: ${error}`);
    }
};

const getAllIcons = (iconAttributes) => Object.entries(pieIcons.default.icons).map(([key, value]) => ({
    name: key,
    icon: value.toSvg(iconAttributes),
})).sort((a, b) => a.name.localeCompare(b.name)); // sort icons alphabetically by name

/**
 * Custom filter that returns either an SVG HTML string for a specified PIE Icon or a HTML string for all PIE icons
 * @param {*} iconConfig
 * @param {string} iconConfig.name - the name of the icon to retrieve. If not provided, filter will return all PIE icons
 * @param {object} iconConfig.attrs - any attributes to add to the svg such as height, width, classes and fill
 * @returns
 */
// eslint-disable-next-line func-names, consistent-return
module.exports = function (iconConfig = {
    name: '',
    attrs: {},
}) {
    const defaultAttributes = {
        height: 50,
        width: 50,
        fill: '#000',
    };

    const attributes = {
        ...defaultAttributes,
        ...(iconConfig && iconConfig.attrs ? iconConfig.attrs : {}),
    };

    return iconConfig && iconConfig.name ? getIconByName(iconConfig.name, attributes) : getAllIcons(attributes);
};
