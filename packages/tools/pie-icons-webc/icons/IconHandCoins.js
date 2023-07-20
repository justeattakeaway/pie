import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--handCoins"><path d="M13.749 9.313a2.441 2.441 0 0 0-3.063.13l-1.26 1.13c-.198.174-.453.27-.717.27h-.315c.173-.338.263-.713.262-1.093V8.219H5.305c-.473 0-.936.14-1.33.402L1.954 9.97H1v1.312h1.348L4.7 9.75a1.05 1.05 0 0 1 .604-.184h2.039v.184a1.094 1.094 0 0 1-1.094 1.094h-.98l-.665 1.312h4.104a2.424 2.424 0 0 0 1.584-.595l1.268-1.129a1.12 1.12 0 0 1 1.409-.06h.061l-2.406 2.738a1.11 1.11 0 0 1-.814.359H1v1.312h8.846a2.408 2.408 0 0 0 1.794-.805L15 10.205l-1.251-.893Z"></path><path d="M8 6.906a2.844 2.844 0 1 0-2.844-2.843A2.853 2.853 0 0 0 8 6.905Zm0-4.375a1.531 1.531 0 1 1-1.531 1.531A1.54 1.54 0 0 1 8 2.532Z"></path></svg>';

export class IconHandCoins extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--handCoins', '', null, 'IconHandCoins');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--handCoins');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--handCoins', '', newVal, 'IconHandCoins');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-hand-coins', IconHandCoins);
