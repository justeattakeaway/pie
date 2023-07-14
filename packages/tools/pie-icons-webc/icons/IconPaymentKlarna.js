import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 24 24" class="c-pieIcon c-pieIcon--klarna"><path fill="#FFB3C7" d="M19.964 7.508H4.051c-1.044 0-1.89.797-1.89 1.782v6.747c0 .984.846 1.782 1.89 1.782h15.913c1.045 0 1.891-.798 1.891-1.782V9.29c0-.985-.846-1.782-1.891-1.782Z"></path><path fill="#0A0B09" fill-rule="evenodd" d="M20.01 13.56a.455.455 0 0 0-.466.443c0 .245.21.444.467.444a.456.456 0 0 0 .466-.444.456.456 0 0 0-.466-.444Zm-1.534-.344c0-.335-.302-.607-.674-.607-.372 0-.673.272-.673.607 0 .336.301.608.673.608.372 0 .674-.272.674-.608Zm.002-1.18h.744v2.36h-.744v-.15a1.35 1.35 0 0 1-.737.216c-.723 0-1.31-.558-1.31-1.246s.587-1.245 1.31-1.245c.274 0 .527.08.737.216v-.151Zm-5.949.307v-.307h-.76v2.36h.762v-1.102c0-.371.424-.571.718-.571h.01v-.687c-.303 0-.58.123-.73.307Zm-1.895.873c0-.335-.302-.607-.674-.607-.372 0-.673.272-.673.607 0 .336.301.608.673.608.372 0 .674-.272.674-.608Zm.002-1.18h.744v2.36h-.744v-.15a1.35 1.35 0 0 1-.737.216c-.723 0-1.31-.558-1.31-1.246s.587-1.245 1.31-1.245c.274 0 .527.08.737.216v-.151Zm4.474-.064c-.296 0-.577.088-.765.33v-.266h-.74v2.36h.749v-1.24c0-.359.253-.535.558-.535.326 0 .514.186.514.53v1.246h.743v-1.502c0-.549-.46-.923-1.059-.923Zm-7.604 2.425h.778v-3.413h-.778v3.413Zm-3.417 0h.823v-3.414H4.09v3.415Zm2.881-3.414a2.65 2.65 0 0 1-.843 1.938l1.14 1.477H6.248L5.01 12.793l.32-.227a1.93 1.93 0 0 0 .833-1.583h.806Z" clip-rule="evenodd"></path></svg>';

export class IconPaymentKlarna extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--klarna', '', null, 'IconPaymentKlarna');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--klarna');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--klarna', '', newVal, 'IconPaymentKlarna');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-payment-klarna', IconPaymentKlarna);
