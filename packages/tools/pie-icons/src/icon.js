import classnames from 'classnames/dedupe';

import { DEFAULT_ATTRS, REACTIVE_NATIVE_ATTRS } from './default-attrs';

class Icon {
    constructor(name, contents, attrs, pathPrefix) {
        this.name = name;
        this.contents = contents;
        this.attrs = {
            ...DEFAULT_ATTRS,
            ...attrs,
        };
        if (pathPrefix !== undefined && pathPrefix !== '') {
            this.pathPrefix = pathPrefix;
        }
    }

    /**
     * Create an SVG string.
     * @param {Object} attrs
     * @param {String} platform - Identifier for platform specific attrs to be included/excluded
     * @returns {string}
     */
    toSvg(attrs = {}, platform = 'default') {
        const normalisedClassname = normaliseClassname(this.name);

        const classname = classnames(
            'c-pieIcon',
            `c-pieIcon--${normalisedClassname}`,
            this.attrs.class,
            attrs.class,
        );

        const combinedAttrs = {
            ...this.attrs,
            ...attrs,
            ...(platform === 'default' ? { class: classname } : {}), // don't include classes when not using the default attrs
            ...(platform === 'reactNative' ? REACTIVE_NATIVE_ATTRS : {}),
        };

        return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`;
    }
}

/**
 * Normalises a string into camelCase format
 * E.g. alert-circle-filled > alertCircleFilled
 *
 * @param {String} classname – the class to be normalised
 * @returns {String}
 */
export function normaliseClassname(classname) {
    // Split name by dashes into an array
    const splitClassname = classname.split('-');

    // then map these such that the first index is lowercase and the rest are Uppercased
    const camelCaseClassnames = splitClassname.map((name, index) =>
        index === 0
            ? name.substring(0, 1).toLowerCase() + name.substring(1)
            : name.substring(0, 1).toUpperCase() + name.substring(1),
    );

    return camelCaseClassnames.join('');
}

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */
function attrsToString(attrs) {
    return Object.keys(attrs)
        .map((key) => `${key}="${attrs[key]}"`)
        .join(' ');
}

export default Icon;
