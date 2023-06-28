import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chartMarkerLarge"><path d="M9 22.125h1.75v7H9v-7Zm6.125 7h1.75v-12.25h-1.75v12.25Zm6.125-8.75v8.75H23v-8.75h-1.75ZM21.25 9a2.625 2.625 0 0 1-.989 2.047L16 14.495l-4.261-3.412A2.626 2.626 0 0 1 10.75 9V2.875h10.5V9ZM19.5 4.625h-7V9a.874.874 0 0 0 .332.682L16 12.255l3.168-2.538A.874.874 0 0 0 19.5 9V4.625Z"></path></svg>';

export class IconChartMarkerLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconChartMarkerLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconChartMarkerLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-chart-marker-large', IconChartMarkerLarge);
