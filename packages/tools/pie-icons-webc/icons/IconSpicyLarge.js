import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--spicyLarge"><path d="M8.37 26.106c-3.168 0-4.375-1.829-4.48-1.934l-.586-.875 1.006-.385c4.279-1.662 6.44-6.037 8.4-9.843a23.407 23.407 0 0 1 3.5-5.67 6.126 6.126 0 0 1 8.794 0 6.44 6.44 0 0 1 0 8.942c-3.29 3.378-9.302 7.875-12.994 9.091a11.28 11.28 0 0 1-3.64.674Zm-2.118-2.231c.875.446 2.512.779 5.198-.131 3.404-1.164 9.222-5.495 12.311-8.663a4.672 4.672 0 0 0 0-6.492 4.376 4.376 0 0 0-6.282 0 22.226 22.226 0 0 0-3.212 5.25c-1.872 3.745-3.98 7.918-8.015 10.036Z"></path><path d="m22.921 11.109-1.592-.718c2.87-6.44 6.755-6.51 6.921-6.51v1.75c-.105 0-2.957.167-5.329 5.478Z"></path><path d="M25.056 12.806a6.011 6.011 0 0 1-6.002-6.002 2.77 2.77 0 0 1 .052-.63l1.706.385a2.003 2.003 0 0 0 0 .245 4.261 4.261 0 0 0 4.253 4.252c.277.004.553-.025.822-.087l.386 1.706a5.25 5.25 0 0 1-1.217.131Z"></path></svg>';

export class IconSpicyLarge extends HTMLElement {
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

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--spicyLarge', '', null, 'IconSpicyLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--spicyLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--spicyLarge', '', newVal, 'IconSpicyLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-spicy-large', IconSpicyLarge);
