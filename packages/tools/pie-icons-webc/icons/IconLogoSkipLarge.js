
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--skipLarge"><path fill-rule="evenodd" d="M18.535 14.036c-.81-.949-1.332-1.624-1.21-2.367.148-.926.791-1.861 1.921-1.861 1.24 0 1.562.261 2.257.605a.542.542 0 0 0 .775-.325l1.02-3.63-.705-.346-.104-.05-.034-.016a6.274 6.274 0 0 0-2.657-.546c-3.844 0-7.34 2.895-7.917 6.455-.403 2.49 1.114 4.247 2.221 5.531l.097.111c.8.903 1.361 1.605 1.224 2.42-.228 1.412-1.33 1.878-2.252 1.878-1.459 0-1.883-.241-2.688-.638-.113-.056-.325-.16-.506-.097a.551.551 0 0 0-.358.369l-.972 3.5-.125.448s1.912 1.023 4.125 1.023c3.275 0 6.107-1.322 7.788-4.516.421-.816.67-1.71.732-2.625.085-2.332-1.633-4.164-2.632-5.323Z" clip-rule="evenodd"></path></svg>';

export class IconLogoSkipLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconLogoSkipLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconLogoSkipLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-logo-skip-large', IconLogoSkipLarge);
