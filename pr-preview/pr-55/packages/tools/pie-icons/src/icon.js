import classnames from 'classnames/dedupe';

import { DEFAULT_ATTRS, REACTIVE_NATIVE_ATTRS } from './default-attrs';


class Icon {
    constructor (name, contents, attrs) {
        this.name = name;
        this.contents = contents;
        this.attrs = {
            ...DEFAULT_ATTRS,
            ...attrs
        };
    }

    /**
   * Create an SVG string.
   * @param {Object} attrs
   * @param {String} platform - Identifier for platform specific attrs to be included/excluded
   * @returns {string}
   */
    toSvg (attrs = {}, platform = 'default') {
        const camelCaseClassname = (this.name).substring(0, 1).toLowerCase() + (this.name).substring(1);

        const classname = classnames('c-pieIcon', `c-pieIcon--${camelCaseClassname}`, this.attrs.class, attrs.class);

        const combinedAttrs = {
            ...this.attrs,
            ...attrs,
            ...(platform === 'default' ? { class: classname } : {}), // don't include classes when not using the default attrs
            ...(platform === 'reactNative' ? REACTIVE_NATIVE_ATTRS : {})
        };

        return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`;
    }
}

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */
function attrsToString (attrs) {
    return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ');
}

export default Icon;
