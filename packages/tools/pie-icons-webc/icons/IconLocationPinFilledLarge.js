
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--locationPinFilledLarge"><path d="m21.6 23.735-1.435 1.435c1.96.455 2.835 1.067 2.835 1.33 0 .446-2.406 1.75-7 1.75-4.594 0-7-1.304-7-1.75 0-.262.875-.875 2.835-1.33L10.4 23.735c-1.811.551-3.15 1.453-3.15 2.765 0 2.406 4.533 3.5 8.75 3.5 4.218 0 8.75-1.094 8.75-3.5 0-1.313-1.339-2.214-3.15-2.765Z"></path><path d="m16 26.859 7.254-7.254a10.256 10.256 0 1 0-14.508 0L16 26.859Zm0-16.984a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Z"></path></svg>;';

export class IconLocationPinFilledLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconLocationPinFilledLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconLocationPinFilledLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-location-pin-filled-large', IconLocationPinFilledLarge);
