
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--clockRefreshLarge"><path d="M16 3.75A12.25 12.25 0 0 0 5.579 22.431l-2.625-.376-.245 1.75 4.812.691a.875.875 0 0 0 .989-.743l.682-4.813-1.75-.245-.402 2.852A10.378 10.378 0 0 1 5.5 16 10.5 10.5 0 1 1 16 26.5v1.75a12.25 12.25 0 1 0 0-24.5Z"></path><path d="m20.296 20.253-5.678-3.404V9h1.75v6.851l4.83 2.896-.902 1.506Z"></path></svg>;';

export class IconClockRefreshLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconClockRefreshLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconClockRefreshLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-clock-refresh-large', IconClockRefreshLarge);
