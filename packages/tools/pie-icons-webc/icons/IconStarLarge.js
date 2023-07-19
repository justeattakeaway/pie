import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--starLarge"><path d="m24.601 29.029-8.199-4.279a.874.874 0 0 0-.813 0l-8.19 4.279 1.6-9.126a.875.875 0 0 0-.253-.77l-6.659-6.467 9.162-1.33a.875.875 0 0 0 .656-.48L16 2.56l4.095 8.295a.875.875 0 0 0 .656.481l9.161 1.33-6.623 6.467a.874.874 0 0 0-.254.77l1.566 9.126ZM16 22.904c.426-.002.847.1 1.225.297l5.049 2.625-.963-5.626a2.624 2.624 0 0 1 .753-2.327l4.086-3.982-5.644-.822a2.624 2.624 0 0 1-1.977-1.444l-2.53-5.11-2.528 5.11a2.625 2.625 0 0 1-1.977 1.435l-5.644.823 4.086 3.98a2.625 2.625 0 0 1 .753 2.328l-.963 5.627 5.049-2.625A2.625 2.625 0 0 1 16 22.869v.035Z"></path></svg>';

export class IconStarLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--starLarge', '', null, 'IconStarLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--starLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--starLarge', '', newVal, 'IconStarLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-star-large', IconStarLarge);
