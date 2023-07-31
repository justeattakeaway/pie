const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');
const list = require('./list');
const usageTypes = require('../../_data/usageTypes');

const metadata = {
    do: {
        displayName: 'Do',
        styleColour: 'support-positive',
        iconFill: 'support-positive',
        iconName: 'check-circle',
    },
    dont: {
        displayName: "Don't",
        styleColour: 'support-error',
        iconFill: 'support-error',
        iconName: 'close-circle',
    },
};

const buildImage = ({
    width, alt, mobileSrc, src,
}) => {
    const isImageFullContainerWidth = !width;
    const imageStyles = !isImageFullContainerWidth ? `style="--img-width: ${width};"` : ''; // If image isn't full width, set it to required width
    const imageAlt = `alt="${alt || ''}"`;
    const mobileImageMaxWidth = '600px';

    return `<figure class="c-usage-img">
          <picture>
            ${mobileSrc ? `<source ${imageStyles} media="(max-width: ${mobileImageMaxWidth})" srcset="${mobileSrc}">` : ''}
            <img src="${src}" ${imageStyles} ${imageAlt}>
          </picture>
      </figure>`;
};

const buildUsageCard = (usageType, { type, items }) => {
    const {
        iconName, iconFill, styleColour, displayName,
    } = metadata[usageType];
    const isImage = type === usageTypes.image;
    const styleColourValue = pieDesignTokenColours({ tokenName: styleColour, tokenPath: ['alias', 'default'] });
    const svg = pieIconsSvg({
        name: iconName,
        attrs: {
            height: 24,
            width: 24,
            fill: iconFill,
        },
    });
    const backdropClasses = ['c-usage-backdrop', ...(isImage ? ['c-usage-backdrop--hasImage'] : [])];

    const content = isImage
        ? items.map((i) => buildImage(i)).join(' ')
        : list({ type: 'bullet', items });

    return `
    <div class="c-usage" style="--style-colour: ${styleColourValue};">
      <div class="c-usage-heading">
        ${svg}
        ${displayName}
      </div>
      <div class="${backdropClasses.join(' ')}">
        ${content}
      </div>
    </div>`;
};

/**
 * A Usage HTML component – display do/dont information with images or a list of text
 * @typedef {object} UsageItem - An item containing information for either "do" or "dont".
 * @property {string} type - Type of item: "image" or "text".
 * @property {Array<{ src: string, mobileSrc?: string, width?: string }>|Array<string>} items - An array of either image objects or list of text.
 *   If type is "image", it should be an array of objects containing `src`, and optional `width` and `mobileSrc` properties.
 *   If type is "text", it should be an array of strings.
 *
 * @param {object} usage - Usage configuration object.
 * @param {UsageItem} usage.do - Information for the "do" section.
 * @param {UsageItem} usage.dont - Information for the "dont" section.
 * @returns {string} - The HTML representation of the usage component.
*/
// eslint-disable-next-line func-names
module.exports = function (props) {
    return `<div class="c-usage-container">
    ${Object.keys(metadata).map((usageType) => buildUsageCard(usageType, props[usageType])).join(' ')}
  </div>`;
};
