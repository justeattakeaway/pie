import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chatLarge"><path d="M25.625 4.625H6.375A2.625 2.625 0 0 0 3.75 7.25v21.875h2.266l4.988-4.996a.92.92 0 0 1 .621-.254h14a2.625 2.625 0 0 0 2.625-2.625v-14a2.625 2.625 0 0 0-2.625-2.625ZM26.5 21.25a.875.875 0 0 1-.875.875h-14c-.696 0-1.363.278-1.855.77l-4.27 4.27V7.25a.875.875 0 0 1 .875-.875h19.25a.875.875 0 0 1 .875.875v14Zm-9.188-7a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.626 0Zm5.25 0a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.625 0Zm-10.5 0a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.626 0Z"></path></svg>';

export class IconChatLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--chatLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatLarge', '', newVal, 'IconChatLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-chat-large', IconChatLarge);
