import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--appleCircleLarge"><path d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z"></path><path d="M22.125 19.5a.999.999 0 0 0-.087.201 8.812 8.812 0 0 1-1.925 3.142 2.056 2.056 0 0 1-2.494.35 2.626 2.626 0 0 0-2.625 0 2.441 2.441 0 0 1-1.26.28 1.836 1.836 0 0 1-1.321-.753 9.16 9.16 0 0 1-2.538-6.361 4.917 4.917 0 0 1 .411-1.934 3.5 3.5 0 0 1 4.848-1.855 1.863 1.863 0 0 0 1.864 0c.3-.155.617-.279.945-.367a4.034 4.034 0 0 1 2.336.245 2.783 2.783 0 0 1 1.365 1.172c-.21.184-.411.35-.604.543-.23.188-.43.409-.595.656a3.299 3.299 0 0 0 .464 3.858c.316.388.739.674 1.216.823Z"></path><path d="M18.958 8.528a2.72 2.72 0 0 1-.254 1.557 2.974 2.974 0 0 1-2.144 1.837c-.682.15-.665.158-.595-.533a3.386 3.386 0 0 1 2.66-2.835c.123-.018.228-.018.333-.026Z"></path></svg>';

export class IconSocialAppleCircleLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--appleCircleLarge', '', null, 'IconSocialAppleCircleLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--appleCircleLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--appleCircleLarge', '', newVal, 'IconSocialAppleCircleLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-apple-circle-large', IconSocialAppleCircleLarge);
