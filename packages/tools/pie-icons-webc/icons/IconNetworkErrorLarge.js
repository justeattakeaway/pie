import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--networkErrorLarge"><path d="M7 25h4.8V14.5H7V25Zm1.5-9h1.8v7.5H8.5V16Z"></path><path d="M25 7h-4.8v14.543l-1.8-3V10.75h-4.65l-3.623-6H8.372l5.25 8.707V25h4.8v-3.54l1.8 3V25h.278l1.35 2.25h1.755L22.255 25H25V7Zm-9.9 5.25h1.8v3.795l-1.8-3v-.795Zm1.8 11.25h-1.8v-7.545l1.8 3V23.5Zm6.6 0h-1.8v-15h1.8v15Z"></path></svg>';

export class IconNetworkErrorLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--networkErrorLarge', '', null, 'IconNetworkErrorLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--networkErrorLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--networkErrorLarge', '', newVal, 'IconNetworkErrorLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-network-error-large', IconNetworkErrorLarge);
