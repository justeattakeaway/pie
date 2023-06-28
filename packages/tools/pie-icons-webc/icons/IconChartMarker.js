import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chartMarker"><path d="M3.844 11.5h1.312V15H3.844v-3.5Zm3.5 3.5h1.312V8.875H7.344V15Zm3.5-4.375V15h1.312v-4.375h-1.312Zm-.158-4.751L8 8 5.314 5.874a1.531 1.531 0 0 1-.595-1.208V1.22h6.562v3.447a1.53 1.53 0 0 1-.595 1.208ZM9.97 2.53H6.03v2.135a.245.245 0 0 0 .088.175L8 6.294 9.881 4.84a.245.245 0 0 0 .088-.175V2.531Z"></path></svg>';

export class IconChartMarker extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconChartMarker');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconChartMarker');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-chart-marker', IconChartMarker);
