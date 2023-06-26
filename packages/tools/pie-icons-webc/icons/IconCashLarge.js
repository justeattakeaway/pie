
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cashLarge"><path d="M29.125 8.125H6.375v3.5h-3.5v12.25h22.75v-3.5h3.5V8.125Zm-5.25 14H4.625v-8.75h1.75v7h17.5v1.75Zm3.5-3.5H8.125v-8.75h19.25v8.75Zm-9.625-1.356a3.019 3.019 0 1 0-3.019-3.019 3.028 3.028 0 0 0 3.019 3.019Zm0-4.288a1.27 1.27 0 1 1 0 2.539 1.27 1.27 0 0 1 0-2.539Zm-4.375 2.144h-3.5v-1.75h3.5v1.75Zm12.25 0h-3.5v-1.75h3.5v1.75Z"></path></svg>;';

export class IconCashLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconCashLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconCashLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-cash-large', IconCashLarge);
