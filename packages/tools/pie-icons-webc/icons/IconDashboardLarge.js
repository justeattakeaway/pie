
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--dashboardLarge"><path d="M29.073 18.625a13.003 13.003 0 0 1-1.112 5.25h-1.933a11.28 11.28 0 0 0-.184-10.832l1.207-1.374a13.02 13.02 0 0 1 2.022 6.956ZM15.948 7.25a11.322 11.322 0 0 1 6.308 1.916l1.155-1.321a13.125 13.125 0 0 0-19.486 16.03H5.86A11.375 11.375 0 0 1 15.948 7.25Zm3.386 5.25 1.181-1.348a8.75 8.75 0 0 0-13.317 7.473h1.75A7 7 0 0 1 19.334 12.5Zm-.508 5.889a3.5 3.5 0 1 1-2.878-1.514 3.5 3.5 0 0 1 1.557.385l8.566-9.783 1.304 1.147-8.549 9.765Zm-1.128 1.986a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z"></path></svg>';

export class IconDashboardLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconDashboardLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconDashboardLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-dashboard-large', IconDashboardLarge);
