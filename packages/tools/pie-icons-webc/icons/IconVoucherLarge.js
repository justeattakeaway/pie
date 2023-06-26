
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--voucherLarge"><path d="M17.199 15.186a6.921 6.921 0 0 1-3.885-3.885.875.875 0 0 0-1.628 0 6.921 6.921 0 0 1-3.885 3.885.875.875 0 0 0 0 1.628 6.921 6.921 0 0 1 3.885 3.885.875.875 0 0 0 1.628 0 6.921 6.921 0 0 1 3.885-3.885.875.875 0 0 0 0-1.628ZM12.5 18.485A8.62 8.62 0 0 0 10.015 16a8.62 8.62 0 0 0 2.485-2.485A8.62 8.62 0 0 0 14.985 16a8.62 8.62 0 0 0-2.485 2.485ZM25.984 5.5H5.14L2 8.641V23.36L5.141 26.5h20.843l3.141-3.141V8.64L25.984 5.5Zm1.391 17.141-2.109 2.109H23v-2.625h-1.75v2.625H5.859L3.75 22.641V9.36L5.859 7.25H21.25v2.625H23V7.25h2.266l2.109 2.109V22.64Zm-6.125-5.766H23v3.5h-1.75v-3.5Zm0-5.25H23v3.5h-1.75v-3.5Z"></path></svg>;';

export class IconVoucherLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconVoucherLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconVoucherLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-voucher-large', IconVoucherLarge);
