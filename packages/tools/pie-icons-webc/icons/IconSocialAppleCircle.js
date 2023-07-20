import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--appleCircle"><g clip-path="url(#prefix__clip0_927_672)"><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.468 5.468 0 1 1 8 2.488a5.468 5.468 0 0 1 0 10.937Z"></path><path d="M10.45 9.33a1.636 1.636 0 0 1-.228-1.916c.087-.106.183-.203.29-.289.095-.096.2-.175.305-.271a1.33 1.33 0 0 0-.682-.604 1.943 1.943 0 0 0-1.155-.123c-.16.046-.314.104-.464.175a.928.928 0 0 1-.927 0 1.75 1.75 0 0 0-2.407.92 2.555 2.555 0 0 0-.2.953 4.541 4.541 0 0 0 1.215 3.159.875.875 0 0 0 .657.367c.214.01.428-.036.62-.131a1.287 1.287 0 0 1 1.313 0 1.024 1.024 0 0 0 1.234-.175c.427-.444.752-.976.954-1.558a.47.47 0 0 1 0-.096 1.268 1.268 0 0 1-.525-.411Z"></path><path d="M8.28 5.979a1.479 1.479 0 0 0 1.059-.875c.118-.242.163-.512.13-.779h-.157A1.671 1.671 0 0 0 8 5.716c-.053.341-.061.333.28.263Z"></path></g><defs><clipPath id="prefix__clip0_927_672"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialAppleCircle extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--appleCircle', '', null, 'IconSocialAppleCircle');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--appleCircle');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--appleCircle', '', newVal, 'IconSocialAppleCircle');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-apple-circle', IconSocialAppleCircle);
