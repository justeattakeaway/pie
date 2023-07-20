import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--patternsLarge"><path d="M4.625 27.375h9.87v-9.87h-9.87v9.87Zm1.75-8.12h6.37v6.37h-6.37v-6.37Z"></path><path d="M12.596 15.23a5.374 5.374 0 0 0 0-10.745 5.374 5.374 0 0 0 0 10.745Zm0-8.995a3.63 3.63 0 0 1 3.623 3.622 3.63 3.63 0 0 1-3.623 3.623 3.63 3.63 0 0 1-3.622-3.623 3.63 3.63 0 0 1 3.622-3.622Z"></path><path d="m21.46 9.857-5.819 11.07H27.28L21.46 9.856Zm0 3.763 2.922 5.556h-5.845l2.923-5.556Z"></path></svg>';

export class IconPatternsLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--patternsLarge', '', null, 'IconPatternsLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--patternsLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--patternsLarge', '', newVal, 'IconPatternsLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-patterns-large', IconPatternsLarge);
