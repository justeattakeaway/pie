import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--snowflakeLarge"><path d="m27.707 17.942-3.456 1.803L17.75 16l6.501-3.745 3.456 1.802.814-1.548-3.395-1.777.158-3.823-1.75-.08-.158 3.912-6.501 3.745V6.98l3.299-2.083-.936-1.487L16 5.465l-3.238-2.056-.936 1.487 3.299 2.083v7.507l-6.501-3.745-.158-3.911-1.75.079.158 3.823-3.395 1.777.814 1.548 3.456-1.802L14.25 16l-6.501 3.745-3.456-1.803-.814 1.55 3.395 1.775-.158 3.824 1.75.079.158-3.911 6.501-3.745v7.507l-3.299 2.091.936 1.48L16 26.534l3.238 2.056.936-1.479-3.299-2.09v-7.508l6.501 3.745.158 3.91 1.75-.078-.158-3.824 3.395-1.776-.814-1.549Z"></path></svg>';

export class IconSnowflakeLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--snowflakeLarge', '', null, 'IconSnowflakeLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--snowflakeLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--snowflakeLarge', '', newVal, 'IconSnowflakeLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-snowflake-large', IconSnowflakeLarge);
