import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--presentationChart"><path d="M15 2.094H1v1.312h1.094v5.469a1.54 1.54 0 0 0 1.531 1.531h3.719v1.707l-1.969 2.012h1.82L8 13.311l.805.814h1.82l-1.969-2.021v-1.698h3.719a1.54 1.54 0 0 0 1.531-1.531V3.406H15V2.094Zm-2.406 6.781a.219.219 0 0 1-.219.219h-8.75a.219.219 0 0 1-.219-.219V3.406h9.188v5.469Z"></path></svg>';

export class IconPresentationChart extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPresentationChart');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPresentationChart');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-presentation-chart', IconPresentationChart);
