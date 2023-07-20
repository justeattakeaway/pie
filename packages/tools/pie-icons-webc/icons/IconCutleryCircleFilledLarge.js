import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cutleryCircleFilledLarge"><path d="m20.183 18.52-1.173-.192a15.435 15.435 0 0 1 1.12-7.027c.149 2.433.114 5.277.053 7.219Z"></path><path fill-rule="evenodd" d="M9.194 5.814a12.25 12.25 0 1 1 13.612 20.372A12.25 12.25 0 0 1 9.194 5.814Zm4.977 3.265-1.75.875v4.375h1.75v-5.25Zm1.685 7.055c.437-.504.694-1.139.73-1.805V9.07l-1.75.875v4.375c0 .814-1.111 1.164-1.54 1.164-.428 0-1.531-.35-1.531-1.164V9.07l-1.75.875v4.375a2.984 2.984 0 0 0 2.406 2.774v6.256h1.75v-6.239a3.001 3.001 0 0 0 1.685-.977Zm5.79 7.21c.086-.863.19-1.894.252-3.765v-.009a85.04 85.04 0 0 0-.062-8.89c-.052-.787-.253-1.636-.927-1.925a1.391 1.391 0 0 0-1.68.534l-.003.004c-.13.189-2.348 3.404-1.983 9.262a1.47 1.47 0 0 0 1.137 1.453l1.75.28a48.158 48.158 0 0 1-.236 3.07h1.75l.001-.013Z" clip-rule="evenodd"></path></svg>';

export class IconCutleryCircleFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cutleryCircleFilledLarge', '', null, 'IconCutleryCircleFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--cutleryCircleFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cutleryCircleFilledLarge', '', newVal, 'IconCutleryCircleFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-cutlery-circle-filled-large', IconCutleryCircleFilledLarge);
