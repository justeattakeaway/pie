import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--kosherLarge"><path d="m23.63 16.105 3.841-6.554H19.85L16 2.875l-3.85 6.676H4.529l3.841 6.554-3.745 6.449h7.508L16 29.125l3.841-6.554h7.534l-3.745-6.466Zm.788-4.804-1.794 3.054-1.75-3.054h3.544ZM21.6 16.096l-2.756 4.708h-5.688L10.4 16.096l2.756-4.795h5.688l2.756 4.795ZM16 6.375l1.829 3.176H14.17L16 6.375Zm-8.418 4.926h3.553l-1.75 3.054-1.803-3.054Zm.097 9.503 1.75-2.966 1.75 2.966h-3.5ZM16 25.625l-1.811-3.089h3.622L16 25.625Zm6.606-7.805 1.75 2.966h-3.482l1.732-2.966Z"></path></svg>';

export class IconKosherLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconKosherLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconKosherLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-kosher-large', IconKosherLarge);
