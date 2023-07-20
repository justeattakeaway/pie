import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--sendLarge"><path d="M25.705 7.315a1.155 1.155 0 0 0-1.08-1.05 1.08 1.08 0 0 0-.488.052L5.5 12.43a1.178 1.178 0 0 0-.75 1.072 1.208 1.208 0 0 0 .75 1.118l3.75 1.552V22h6l2.108 4.59a1.2 1.2 0 0 0 1.064.652h.053a1.207 1.207 0 0 0 1.065-.795L25.645 7.87a1.17 1.17 0 0 0 .06-.555Zm-3.51 1.222-8.445 7.868-6.885-2.843 15.33-5.025ZM10.75 20.5v-3.705l1.785.75.832.345.3.652.908 1.958H10.75Zm7.628 4.71-3.556-7.763 8.783-8.197-5.227 15.96Z"></path></svg>';

export class IconSendLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--sendLarge', '', null, 'IconSendLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--sendLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--sendLarge', '', newVal, 'IconSendLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-send-large', IconSendLarge);
