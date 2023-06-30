import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--microsoftCircleFilledStatic"><g clip-path="url(#prefix__clip0_2820_3487)"><path fill="#242E30" d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Z"></path><path fill="#fff" d="M7.71 11H5V8.285h2.726L7.71 11Z"></path><path fill="#fff" d="M11 11H8.274V8.285H11V11Z"></path><path fill="#fff" d="M7.71 7.715H5V5h2.726L7.71 7.715Z"></path><path fill="#fff" d="M11 7.715H8.274V5H11v2.715Z"></path></g><defs><clipPath id="prefix__clip0_2820_3487"><rect width="14" height="14" fill="#fff" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialMicrosoftCircleFilledStatic extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--microsoftCircleFilledStatic');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--microsoftCircleFilledStatic', '', newVal, 'IconSocialMicrosoftCircleFilledStatic');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-social-microsoft-circle-filled-static', IconSocialMicrosoftCircleFilledStatic);
