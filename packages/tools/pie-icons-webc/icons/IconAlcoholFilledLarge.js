import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--alcoholFilledLarge"><path d="M17.444 6.918v7.253a5.67 5.67 0 0 0 4.786 5.583v7.621h-3.22v1.75h8.199v-1.75H23.98v-7.621a5.662 5.662 0 0 0 4.786-5.583V6.918H17.444Zm9.572 4.278c-2.406.691-3.325.394-4.375 0a7 7 0 0 0-3.5-.411V8.668h7.823l.052 2.528Z"></path><path d="M14.679 16a10.049 10.049 0 0 0-1.208-2.188 5.005 5.005 0 0 1-1.024-2.187 5.82 5.82 0 0 1-.06-.822V5.5A2.625 2.625 0 0 0 9.76 2.875H8.466A2.625 2.625 0 0 0 5.841 5.5v5.303c.001.275-.022.55-.07.822a5.005 5.005 0 0 1-1.024 2.188A9.696 9.696 0 0 0 3.55 16a8.751 8.751 0 0 0-.438 1.75c-.08.58-.122 1.165-.122 1.75v7a2.511 2.511 0 0 0 2.371 2.625h7.499a2.52 2.52 0 0 0 2.38-2.625v-7c.007-.585-.031-1.17-.114-1.75a8.262 8.262 0 0 0-.446-1.75ZM6.19 14.81a6.484 6.484 0 0 0 1.4-4.008v-.927h3.045v.928c0 .274.015.549.044.822a6.484 6.484 0 0 0 1.356 3.185c.271.38.517.777.735 1.19H5.5a9.41 9.41 0 0 1 .691-1.19Z"></path></svg>';

export class IconAlcoholFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--alcoholFilledLarge', '', null, 'IconAlcoholFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--alcoholFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--alcoholFilledLarge', '', newVal, 'IconAlcoholFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-alcohol-filled-large', IconAlcoholFilledLarge);
