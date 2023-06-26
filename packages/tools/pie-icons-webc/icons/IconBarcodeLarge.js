
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--barcodeLarge"><path d="M8.125 8.125v15.75h-1.75V8.125h1.75Zm15.75 0v15.75h1.75V8.125h-1.75ZM19.5 21.25h1.75V8.125H19.5V21.25Zm-4.375 0h1.75V8.125h-1.75V21.25Zm-4.375 0h1.75V8.125h-1.75V21.25Zm17.5-16.625H23v1.75h4.375v4.375h1.75V5.5a.875.875 0 0 0-.875-.875ZM2.875 5.5v5.25h1.75V6.375H9v-1.75H3.75a.875.875 0 0 0-.875.875Zm1.75 15.75h-1.75v5.25a.875.875 0 0 0 .875.875H9v-1.75H4.625V21.25Zm22.75 4.375H23v1.75h5.25a.875.875 0 0 0 .875-.875v-5.25h-1.75v4.375Z"></path></svg>;';

export class IconBarcodeLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconBarcodeLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconBarcodeLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-barcode-large', IconBarcodeLarge);
