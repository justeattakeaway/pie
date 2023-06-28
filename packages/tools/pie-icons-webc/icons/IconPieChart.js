import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pieChart"><path d="M8.656 8.656H1.22V8A6.79 6.79 0 0 1 8 1.219h.656v7.437ZM2.531 7.344h4.813V2.566a5.495 5.495 0 0 0-4.778 4.778h-.035Zm7.412-5.346V3.38A5.031 5.031 0 0 1 8 13.031a5.075 5.075 0 0 1-4.62-3.054H1.998A6.326 6.326 0 0 0 14.344 8a6.3 6.3 0 0 0-4.367-6.002h-.034Z"></path></svg>';

export class IconPieChart extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPieChart');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPieChart');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-pie-chart', IconPieChart);
