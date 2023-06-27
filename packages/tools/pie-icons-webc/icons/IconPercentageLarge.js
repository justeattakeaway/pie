
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--percentageLarge"><path d="M23 16c-3.001 0-4.375 2.494-4.375 4.813 0 2.318 1.374 4.812 4.375 4.812s4.375-2.494 4.375-4.813C27.375 18.494 26.01 16 23 16Zm0 7.875c-2.555 0-2.625-2.747-2.625-3.063 0-.315.07-3.062 2.625-3.062s2.625 2.747 2.625 3.063c0 .315-.07 3.062-2.625 3.062Z"></path><path d="M22.16 6.375 7.766 25.625h2.188l14.393-19.25H22.16Z"></path><path d="M9 16c3.01 0 4.375-2.494 4.375-4.813 0-2.318-1.365-4.812-4.375-4.812s-4.375 2.494-4.375 4.813C4.625 13.505 5.999 16 9 16Zm0-7.875c2.555 0 2.625 2.748 2.625 3.063 0 .314-.07 3.062-2.625 3.062s-2.625-2.748-2.625-3.063c0-.314.07-3.062 2.625-3.062Z"></path></svg>';

export class IconPercentageLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPercentageLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPercentageLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-percentage-large', IconPercentageLarge);
