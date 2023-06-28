import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--presentationChartLarge"><path d="M29.125 5.5H2.875v1.75h1.75V19.5a2.625 2.625 0 0 0 2.625 2.625h7.875V24.4l-3.824 3.85h2.468L16 25.992l2.231 2.258h2.459l-3.815-3.867v-2.258h7.875a2.625 2.625 0 0 0 2.625-2.625V7.25h1.75V5.5Zm-3.5 14a.875.875 0 0 1-.875.875H7.25a.875.875 0 0 1-.875-.875V7.25h19.25V19.5ZM12.5 16.875h-1.75v-3.5h1.75v3.5Zm4.375 0h-1.75v-7h1.75v7Zm4.375 0H19.5v-5.25h1.75v5.25Z"></path></svg>';

export class IconPresentationChartLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPresentationChartLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPresentationChartLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-presentation-chart-large', IconPresentationChartLarge);
