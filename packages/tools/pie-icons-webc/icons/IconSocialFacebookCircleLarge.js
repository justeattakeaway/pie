import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--facebookCircleLarge"><path d="M16 3.671a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 10.5-10.5A10.5 10.5 0 0 1 16 26.43v-.009Z"></path><path d="M14.434 12.185v1.986H12.15v2.625h2.284v6.283a8.75 8.75 0 0 0 2.817 0V16.77h2.091l.403-2.625h-2.494V12.5a1.295 1.295 0 0 1 1.461-1.409h1.138V8.86a13.938 13.938 0 0 0-2.013-.175 3.176 3.176 0 0 0-3.403 3.5Z"></path></svg>';

export class IconSocialFacebookCircleLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircleLarge', '', null, 'IconSocialFacebookCircleLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--facebookCircleLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircleLarge', '', newVal, 'IconSocialFacebookCircleLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-facebook-circle-large', IconSocialFacebookCircleLarge);
