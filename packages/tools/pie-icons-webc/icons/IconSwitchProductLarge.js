import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--switchProductLarge"><path d="M8.974 6.375v2.599H6.375V6.375h2.599Zm1.75-1.75H4.625v6.099h6.099V4.625Z"></path><path d="M8.974 14.696v2.599H6.375v-2.599h2.599Zm1.75-1.75H4.625v6.099h6.099v-6.099Z"></path><path d="M17.295 6.375v2.599h-2.599V6.375h2.599Zm1.75-1.75h-6.099v6.099h6.099V4.625Z"></path><path d="M17.295 14.696v2.599h-2.599v-2.599h2.599Zm1.75-1.75h-6.099v6.099h6.099v-6.099Z"></path><path d="M8.974 23.017v2.6H6.375v-2.6h2.599Zm1.75-1.75H4.625v6.1h6.099v-6.1Z"></path><path d="M17.295 23.017v2.6h-2.599v-2.6h2.599Zm1.75-1.75h-6.099v6.1h6.099v-6.1Z"></path><path d="M25.616 6.375v2.599h-2.599V6.375h2.6Zm1.75-1.75h-6.099v6.099h6.1V4.625Z"></path><path d="M25.616 14.696v2.599h-2.599v-2.599h2.6Zm1.75-1.75h-6.099v6.099h6.1v-6.099Z"></path><path d="M25.616 23.017v2.6h-2.599v-2.6h2.6Zm1.75-1.75h-6.099v6.1h6.1v-6.1Z"></path></svg>';

export class IconSwitchProductLarge extends HTMLElement {
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

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--switchProductLarge', '', null, 'IconSwitchProductLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--switchProductLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--switchProductLarge', '', newVal, 'IconSwitchProductLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-switch-product-large', IconSwitchProductLarge);
