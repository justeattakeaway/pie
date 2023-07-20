import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--kebabLarge"><path d="M26.5 4.625v-1.75h-21v1.75h9.625V7.25H11.52a3.789 3.789 0 0 0-2.809 1.251 3.841 3.841 0 0 0-.945 2.958L9.053 23.13a3.78 3.78 0 0 0 3.744 3.369h2.328v2.625h1.75V26.5h2.328a3.788 3.788 0 0 0 3.745-3.378l1.286-11.663a3.841 3.841 0 0 0-.945-2.958A3.788 3.788 0 0 0 20.48 7.25h-3.605V4.625H26.5ZM20.48 9a1.986 1.986 0 0 1 1.505.674 2.065 2.065 0 0 1 .508 1.592l-.22 1.978-4.523-.744v1.75l4.331.726-.56 5.084-3.771-.674v1.75l3.579.648-.079 1.146a2.03 2.03 0 0 1-2.047 1.82h-6.405a2.021 2.021 0 0 1-2.004-1.811l-.482-4.314 3.938-.875v-1.846l-4.13.971-.612-5.574a2.065 2.065 0 0 1 .507-1.592A1.986 1.986 0 0 1 11.52 9h8.96Z"></path></svg>';

export class IconKebabLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--kebabLarge', '', null, 'IconKebabLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--kebabLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--kebabLarge', '', newVal, 'IconKebabLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-kebab-large', IconKebabLarge);
