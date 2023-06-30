import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--thumbsDownFilledLarge"><path d="m26.587 17.242-4.724 1.164.97 4.839c.145.65.093 1.33-.148 1.951a3.43 3.43 0 0 1-3.754 2.179s-4.611-9.249-5.39-10.404c-.307-.43-.585-.88-.831-1.347a12.119 12.119 0 0 1-1.085-5.312 8.521 8.521 0 0 1 1.094-4.374c.245-.454.517-.892.814-1.313h8.88A4.375 4.375 0 0 1 26.5 7.39l1.986 6.545a2.625 2.625 0 0 1-1.899 3.307ZM11.18 5.072a10.29 10.29 0 0 0-1.304 5.24 13.842 13.842 0 0 0 1.286 6.126c.088.175.184.332.271.48H3.75V4.626h7.682l-.253.446Z"></path></svg>';

export class IconThumbsDownFilledLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--thumbsDownFilledLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsDownFilledLarge', '', newVal, 'IconThumbsDownFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-thumbs-down-filled-large', IconThumbsDownFilledLarge);
