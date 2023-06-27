
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--unitedKingdom"><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"></path><path fill="#0052B4" d="M2.45 3.737A6.973 6.973 0 0 0 1.24 6.173h3.642L2.45 3.74v-.003Zm12.31 2.436a6.973 6.973 0 0 0-1.206-2.433L11.12 6.173h3.64ZM1.24 9.827c.239.882.648 1.709 1.206 2.433L4.88 9.827H1.241Zm11.02-7.38a6.972 6.972 0 0 0-2.434-1.204v3.64l2.434-2.434v-.003ZM3.74 13.553a6.973 6.973 0 0 0 2.436 1.203v-3.64L3.74 13.553ZM6.173 1.24A6.973 6.973 0 0 0 3.74 2.446l2.434 2.437V1.24Zm3.653 13.518a6.971 6.971 0 0 0 2.434-1.206L9.826 11.12v3.64Zm1.29-4.932 2.434 2.433a6.972 6.972 0 0 0 1.209-2.433h-3.643Z"></path><path fill="#D80027" d="M14.94 7.087H8.913V1.06a7.07 7.07 0 0 0-1.826 0v6.027H1.06a7.07 7.07 0 0 0 0 1.826h6.027v6.027c.606.079 1.22.079 1.826 0V8.913h6.027a7.061 7.061 0 0 0 0-1.826Z"></path><path fill="#D80027" d="m9.827 9.827 3.122 3.122c.143-.143.28-.293.41-.448l-2.671-2.674h-.861Zm-3.654 0-3.122 3.122c.143.143.293.28.448.41l2.674-2.671v-.861Zm0-3.654L3.051 3.051a7.02 7.02 0 0 0-.41.448l2.671 2.674h.861Zm3.654 0 3.122-3.122a7.027 7.027 0 0 0-.448-.41L9.827 5.312v.861Z"></path></svg>';

export default class IconFlagUnitedKingdom extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconFlagUnitedKingdom');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconFlagUnitedKingdom');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-flag-united-kingdom', IconFlagUnitedKingdom);
