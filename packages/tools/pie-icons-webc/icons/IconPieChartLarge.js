
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pieChartLarge"><path d="M16.875 2.875H16A13.125 13.125 0 0 0 2.875 16v.875h14v-14Zm-1.75 12.25h-10.5a11.375 11.375 0 0 1 10.5-10.5v10.5Zm.07 11.375-.14 1.75a12.294 12.294 0 0 1-11.016-9.625h1.793a10.552 10.552 0 0 0 9.363 7.875ZM28.25 16a12.294 12.294 0 0 1-11.305 12.25l-.14-1.75a10.5 10.5 0 0 0 1.82-20.668V4.03A12.25 12.25 0 0 1 28.25 16Z"></path></svg>;';

export class IconPieChartLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPieChartLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPieChartLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-pie-chart-large', IconPieChartLarge);
