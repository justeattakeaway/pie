import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M2.969 11.5H4.28v2.625H2.97V11.5Zm4.375 2.625h1.312V9.75H7.344v4.375Zm4.375 0h1.312V8H11.72v6.125Zm.656-12.031h-3.5v1.312h2.047C8.455 6.25 6.092 7.344 2.75 7.344v1.312c3.631 0 6.309-1.225 8.969-4.156v1.75h1.312v-3.5a.665.665 0 0 0-.656-.656Z"></path></svg>';

export class IconChartIncrease extends HTMLElement {
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

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--chartIncrease', '', null, 'IconChartIncrease');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--chartIncrease');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chartIncrease', '', newVal, 'IconChartIncrease');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--chartIncrease', newVal);
    }
}

customElements.define('icon-chart-increase', IconChartIncrease);
