import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--officeLarge"><path d="M24.75 4.625H7.25A2.625 2.625 0 0 0 4.625 7.25v20.125h22.75V7.25a2.625 2.625 0 0 0-2.625-2.625Zm-10.5 21v-3.5h3.5v3.5h-3.5Zm11.375 0H19.5v-3.5h1.75v-1.75h-10.5v1.75h1.75v3.5H6.375V7.25a.875.875 0 0 1 .875-.875h17.5a.875.875 0 0 1 .875.875v18.375ZM17.75 9.875h3.5v1.75h-3.5v-1.75Zm-7 0h3.5v1.75h-3.5v-1.75Zm7 5.25h3.5v1.75h-3.5v-1.75Zm-7 0h3.5v1.75h-3.5v-1.75Z"></path></svg>';

export class IconOfficeLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--officeLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--officeLarge', '', newVal, 'IconOfficeLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-office-large', IconOfficeLarge);
