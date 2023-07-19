import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--stopwatchFilledLarge"><path d="M17.75 6.419V4.625h3.5l-.604-1.75h-7.542l-.604 1.75H16v1.794a11.375 11.375 0 0 0-9.625 6.956h4.375a.875.875 0 0 1 .875.875v7a.875.875 0 0 1-.875.875H6.375A11.375 11.375 0 1 0 17.75 6.419ZM16 11.669h1.75v5.626l3.946 2.371-.875 1.505L16 18.25v-6.58Z"></path><path d="M9.875 16.875v-1.75H2l.788 1.75h7.087Z"></path><path d="M9.875 20.375v-1.75h-5.25l.787 1.75h4.463Z"></path></svg>';

export class IconStopwatchFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatchFilledLarge', '', null, 'IconStopwatchFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--stopwatchFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatchFilledLarge', '', newVal, 'IconStopwatchFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-stopwatch-filled-large', IconStopwatchFilledLarge);
