import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--switchProduct"><path d="M5.261 2.094H2.094V5.26H5.26V2.094Z"></path><path d="M5.261 6.407H2.094v3.168H5.26V6.408Z"></path><path d="M9.584 2.094H6.416V5.26h3.168V2.094Z"></path><path d="M9.584 6.407H6.416v3.168h3.168V6.408Z"></path><path d="M5.261 10.73H2.094v3.168H5.26V10.73Z"></path><path d="M9.584 10.73H6.416v3.168h3.168V10.73Z"></path><path d="M13.898 2.094H10.73V5.26h3.168V2.094Z"></path><path d="M13.898 6.407H10.73v3.168h3.168V6.408Z"></path><path d="M13.898 10.73H10.73v3.168h3.168V10.73Z"></path></svg>';

export class IconSwitchProduct extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--switchProduct');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--switchProduct', '', newVal, 'IconSwitchProduct');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-switch-product', IconSwitchProduct);
