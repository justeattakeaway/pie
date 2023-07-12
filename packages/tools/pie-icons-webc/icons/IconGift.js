import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--gift"><path d="M10.329 3.333c.112-.013.226-.013.338 0V2.071a2.18 2.18 0 0 0-.338 0A2.969 2.969 0 0 0 8 3.138 2.969 2.969 0 0 0 5.671 2a2.071 2.071 0 0 0-.338.071v1.333c.113-.013.226-.013.338 0A1.68 1.68 0 0 1 7.333 4.96H2v4h.889v3.778a1.6 1.6 0 0 0 1.555 1.555h7.112a1.6 1.6 0 0 0 1.555-1.555V8.96H14v-4H8.667a1.671 1.671 0 0 1 1.662-1.627ZM7.333 12.96H4.444a.258.258 0 0 1-.222-.222V8.96h3.111v4Zm0-5.333h-4V6.293h4v1.334Zm4.445 5.075a.258.258 0 0 1-.258.258H8.667v-4h3.11v3.742Zm.889-6.409v1.334h-4V6.293h4Z"></path></svg>';

export class IconGift extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--gift', '', null, 'IconGift');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--gift');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--gift', '', newVal, 'IconGift');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-gift', IconGift);
