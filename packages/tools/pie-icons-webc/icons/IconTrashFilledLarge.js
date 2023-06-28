import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--trashFilledLarge"><path d="M19.938 4.625h-7.875l-.876 1.75h9.626l-.875-1.75Z"></path><path d="M3.75 8.125v1.75h2.319l1.601 16.87a2.625 2.625 0 0 0 2.625 2.38h11.428a2.624 2.624 0 0 0 2.625-2.38l1.583-16.87h2.319v-1.75H3.75Zm8.461 6.125h1.75l.63 7.875h-1.75l-.63-7.875Zm6.948 7.875h-1.75l.63-7.875h1.75l-.63 7.875Z"></path></svg>';

export class IconTrashFilledLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconTrashFilledLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconTrashFilledLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-trash-filled-large', IconTrashFilledLarge);
