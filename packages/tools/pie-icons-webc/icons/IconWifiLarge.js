
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--wifiLarge"><path d="M19.78 20.585a4.916 4.916 0 0 0-3.78-1.96 4.918 4.918 0 0 0-3.78 1.942L10.864 19.5A6.652 6.652 0 0 1 16 16.875a6.65 6.65 0 0 1 5.136 2.625l-1.356 1.085Z"></path><path d="M27.034 13.655A14.254 14.254 0 0 0 16 8.125a14.254 14.254 0 0 0-11.034 5.53L3.62 12.544a15.95 15.95 0 0 1 12.38-6.169 15.952 15.952 0 0 1 12.382 6.169l-1.347 1.111Z"></path><path d="M23.525 17.234A9.767 9.767 0 0 0 16 13.375a9.764 9.764 0 0 0-7.525 3.841l-1.348-1.094A11.463 11.463 0 0 1 16 11.625a11.461 11.461 0 0 1 8.872 4.48l-1.347 1.129Z"></path><path d="M16 25.406a1.531 1.531 0 1 0 0-3.062 1.531 1.531 0 0 0 0 3.062Z"></path></svg>;';

export class IconWifiLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconWifiLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconWifiLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-wifi-large', IconWifiLarge);
