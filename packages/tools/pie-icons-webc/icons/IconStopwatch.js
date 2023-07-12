import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--stopwatch"><path d="M13.547 9.234a5.547 5.547 0 0 1-10.114 3.141h1.75A4.165 4.165 0 0 0 8 13.469a4.235 4.235 0 1 0 0-8.461A4.191 4.191 0 0 0 5.008 6.25H3.336a5.539 5.539 0 0 1 10.212 2.984ZM7.344 6.705v2.966L9.67 11.23l.727-1.094-1.75-1.164V6.705H7.344ZM5.375 9.969H2.531l.438 1.312h2.406V9.97Zm0-2.625H1l.438 1.312h3.937V7.344Zm4.804-4.83-.315-1.295H6.136l-.315 1.295h4.375-.017Z"></path></svg>';

export class IconStopwatch extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatch', '', null, 'IconStopwatch');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--stopwatch');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stopwatch', '', newVal, 'IconStopwatch');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-stopwatch', IconStopwatch);
