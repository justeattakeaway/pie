
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cutleryCircleFilled"><path d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219ZM6.985 4.5v2.8H5.672V5.069L6.986 4.5Zm1.89 2.555a2.24 2.24 0 0 1-1.872 2.249v2.625H5.786V9.304A2.231 2.231 0 0 1 3.87 7.055V5.121L5.174 4.5v2.555a.875.875 0 0 0 .84.945h.691a.875.875 0 0 0 .875-.971V5.104L8.875 4.5v2.555Zm3.124 4.856h-1.374c0-.358.061-.875.088-1.365l-.875-.148a.945.945 0 0 1-.753-.928 7.805 7.805 0 0 1 1.277-4.97.875.875 0 0 1 1.138-.341c.35.149.551.534.604 1.172a51.534 51.534 0 0 1-.131 6.58h.026Z"></path><path d="m10.38 9.155.411.07c0-.875.044-1.855 0-2.739a7.06 7.06 0 0 0-.411 2.669Z"></path></svg>;';

export class IconCutleryCircleFilled extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);

        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        const defaultSize = getDefaultIconSize('IconCutleryCircleFilled');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconCutleryCircleFilled');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-cutlery-circle-filled', IconCutleryCircleFilled);
