import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--facebookCircle"><g clip-path="url(#prefix__clip0_889_539)"><path d="M8 1.175A6.781 6.781 0 1 0 14.782 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.469 5.469 0 1 1 8 2.487a5.469 5.469 0 0 1 0 10.938Z"></path><path d="M7.213 6.145v.98H6.058v1.313h1.155v3.167c.234.043.47.063.709.061a3.81 3.81 0 0 0 .708-.061v-3.15h1.06l.2-1.33H8.63V6.25a.656.656 0 0 1 .744-.717h.569V4.5a7 7 0 0 0-1.015-.087 1.601 1.601 0 0 0-1.715 1.732Z"></path></g><defs><clipPath id="prefix__clip0_889_539"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialFacebookCircle extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircle', '', null, 'IconSocialFacebookCircle');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--facebookCircle');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircle', '', newVal, 'IconSocialFacebookCircle');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-facebook-circle', IconSocialFacebookCircle);
