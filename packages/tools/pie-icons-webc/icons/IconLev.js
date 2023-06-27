
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--lev"><g clip-path="url(#prefix__clip0_18_2449)"><path d="M2.969 3.844H7.78v8.426H6.47V5.156H4.28c0 2.249-.332 6.782-3.281 6.782v-1.313c1.75 0 1.969-3.841 1.969-6.125v-.656ZM15 9.899a2.45 2.45 0 0 1-2.695 2.327H9.313V3.81h2.835a2.231 2.231 0 0 1 2.467 2.266 1.96 1.96 0 0 1-1.12 1.75A2.109 2.109 0 0 1 15 9.899Zm-4.463-2.477h1.47a1.242 1.242 0 0 0 1.374-1.268 1.223 1.223 0 0 0-1.365-1.26H10.53l.008 2.528ZM13.75 9.82a1.303 1.303 0 0 0-1.47-1.339h-1.75v2.625h1.75A1.293 1.293 0 0 0 13.74 9.82h.009Z"></path></g><defs><clipPath id="prefix__clip0_18_2449"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export default class IconLev extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconLev');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconLev');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-lev', IconLev);
