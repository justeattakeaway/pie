
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--houseFilled"><g clip-path="url(#prefix__clip0_2290_4013)"><path d="M8.875 2.348a1.75 1.75 0 0 0-1.75.008C4.771 3.905 1.114 7.904 1 8.08l.971.875s.42-.464 1.042-1.111v6.055h10.062V7.86a38.793 38.793 0 0 1 1.033 1.103l.97-.875a47.034 47.034 0 0 0-6.203-5.74Zm-1.75 8.277a.875.875 0 0 1 1.75 0v1.969h-1.75v-1.969Z"></path></g><defs><clipPath id="prefix__clip0_2290_4013"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>;';

export class IconHouseFilled extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconHouseFilled');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconHouseFilled');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-house-filled', IconHouseFilled);
