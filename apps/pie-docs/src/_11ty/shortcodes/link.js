const pieIconsSvg = require('../filters/pieIconsSvg');

/**
 * Checks whether link is a valid URL containing https or http
 * @param {String} str
 * @returns {Boolean} to confirm validity of URL
 */
const isHttpValid = (str) => {
    try {
        const newUrl = new URL(str);
        return newUrl.protocol === 'https:' || newUrl.protocol === 'http:';
    } catch (err) {
        return false;
    }
};

/**
 * Creates a link component with an icon, content and background container
 * @param {String} link
 * @param {String} ariaLabel
 * @returns {String} a <div> element containing the link provided by the parameter.
 */
const createLink = (link, ariaLabel) => {
    if (!isHttpValid(link)) {
        throw new Error('Link is not valid. Please ensure URL is a string containing http or https.');
    }

    const svg = pieIconsSvg({
        name: 'link',
        attrs: {
            height: 24,
            width: 24,
        },
    });

    return `
    <div class="c-link-backdrop">
        ${svg} Check out the <a class="c-link" href="${link}" aria-label="${ariaLabel}" target="_blank">link</a>
    </div>`;
};

// eslint-disable-next-line func-names
module.exports = function (links) {
    return `<div class="c-link-container">${links.map((element) => createLink(element.link, element.ariaLabel)).join('')}</div>`;
};
