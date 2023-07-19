import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--navigationExpandLarge"><path d="M4.48 4.48v23.03h18.602a4.429 4.429 0 0 0 4.429-4.428V4.48H4.48Zm7.086 21.26H6.252V6.251h5.314v19.487Zm14.173-2.658a2.657 2.657 0 0 1-2.657 2.657h-9.744V6.252h12.401v16.83Z"></path><path d="m19.468 16.952 1.7 1.701H15.11v1.771h6.058l-1.7 1.701 1.249 1.258 2.905-2.905a1.338 1.338 0 0 0 0-1.878l-2.905-2.897-1.25 1.25Z"></path></svg>';

export class IconNavigationExpandLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationExpandLarge', '', null, 'IconNavigationExpandLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--navigationExpandLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationExpandLarge', '', newVal, 'IconNavigationExpandLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-navigation-expand-large', IconNavigationExpandLarge);
