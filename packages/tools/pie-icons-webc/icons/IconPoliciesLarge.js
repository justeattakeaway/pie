import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--policiesLarge"><path d="M18.625 3.75h-14v25.375h22.75V12.5a8.749 8.749 0 0 0-8.75-8.75Zm6.773 7h-5.023V5.728a7.044 7.044 0 0 1 5.023 5.022Zm.227 16.625H6.375V5.5h12.25v7h7v14.875Zm-10.5-14H10.75v-1.75h4.375v1.75Zm-4.375 7h7v1.75h-7v-1.75Zm0-4.375h10.5v1.75h-10.5V16Z"></path></svg>';

export class IconPoliciesLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--policiesLarge', '', null, 'IconPoliciesLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--policiesLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--policiesLarge', '', newVal, 'IconPoliciesLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-policies-large', IconPoliciesLarge);
