import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--alertTriangleFilled"><path d="m14.694 10.625-5.408-8.68a1.505 1.505 0 0 0-2.572 0l-5.408 8.68a1.592 1.592 0 0 0 0 1.627 1.497 1.497 0 0 0 1.33.797h10.771a1.497 1.497 0 0 0 1.33-.796 1.592 1.592 0 0 0-.043-1.628Zm-6.694 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75ZM7.344 8V5.375h1.312V8H7.344Z"></path></svg>';

export class IconAlertTriangleFilled extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--alertTriangleFilled', '', null, 'IconAlertTriangleFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--alertTriangleFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--alertTriangleFilled', '', newVal, 'IconAlertTriangleFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-alert-triangle-filled', IconAlertTriangleFilled);
