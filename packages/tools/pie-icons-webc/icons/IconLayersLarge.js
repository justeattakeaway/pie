
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--layersLarge"><path d="M16 21.39 8.895 16l-1.452 1.094L16 23.586l8.558-6.492L23.114 16 16 21.39Z"></path><path d="M6.28 14.023a.998.998 0 0 1 0-1.602L16 5.054l9.722 7.367a.998.998 0 0 1 0 1.602l-1.164.875L26.01 16l.77-.586a2.748 2.748 0 0 0 0-4.375L16 2.875 5.22 11.03a2.747 2.747 0 0 0 0 4.375l.77.586 1.453-1.093-1.164-.875Z"></path><path d="M26.78 16.586 26.01 16l-1.452 1.094 1.164.875a.997.997 0 0 1 0 1.601L16 26.946 6.28 19.58a.999.999 0 0 1 0-1.602l1.163-.875L5.99 16l-.77.586a2.748 2.748 0 0 0 0 4.375L16 29.125l10.78-8.172a2.748 2.748 0 0 0 0-4.375v.008Z"></path><path d="m8.895 16-1.452-1.102L5.99 16l1.453 1.094L8.895 16Z"></path><path d="m23.114 16 1.444 1.094L26.01 16l-1.452-1.102L23.114 16Z"></path></svg>';

export class IconLayersLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconLayersLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconLayersLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-layers-large', IconLayersLarge);
