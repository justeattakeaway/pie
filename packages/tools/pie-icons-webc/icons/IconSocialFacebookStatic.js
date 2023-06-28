import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--facebookStatic"><g clip-path="url(#prefix__clip0_1595_1545)"><path fill="#1778F2" d="M8 1.455A6.545 6.545 0 0 0 6.96 14.466V9.89H5.296V8H6.96V6.556A2.31 2.31 0 0 1 9.435 4.01c.49.007.978.051 1.461.131v1.61h-.822a.945.945 0 0 0-1.068 1.024V8h1.812l-.289 1.89H9.006v4.576A6.545 6.545 0 0 0 8 1.455Z"></path></g><defs><clipPath id="prefix__clip0_1595_1545"><rect width="14" height="14" fill="#fff" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialFacebookStatic extends HTMLElement {
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

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        const defaultSize = getDefaultIconSize('IconSocialFacebookStatic');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSocialFacebookStatic');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-social-facebook-static', IconSocialFacebookStatic);
