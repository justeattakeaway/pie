import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--microsoftStatic"><g clip-path="url(#prefix__clip0_2820_3494)"><path fill="#00A3EE" d="M7.372 14.5H1.5V8.618h5.905L7.372 14.5Z"></path><path fill="#FFB700" d="M8.595 14.5H14.5V8.618H8.595V14.5Z"></path><path fill="#F15121" d="M7.372 7.382H1.5V1.5h5.905l-.033 5.882Z"></path><path fill="#7EB801" d="M14.5 7.382H8.595V1.5H14.5v5.882Z"></path></g><defs><clipPath id="prefix__clip0_2820_3494"><rect width="14" height="14" fill="#fff" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialMicrosoftStatic extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconSocialMicrosoftStatic');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSocialMicrosoftStatic');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-social-microsoft-static', IconSocialMicrosoftStatic);
