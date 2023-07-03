import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--fullscreenExpand"><path d="m5.99 3.406.737-1.312H2.094v4.633l1.312-.738V3.406H5.99Z"></path><path d="M10.01 3.406h2.584V5.99l1.312.738V2.094H9.273l.738 1.312Z"></path><path d="M12.594 10.01v2.584H10.01l-.738 1.312h4.633V9.273l-1.312.738Z"></path><path d="m3.406 10.01-1.312-.737v4.633h4.633l-.738-1.312H3.406V10.01Z"></path></svg>';

export class IconFullscreenExpand extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExpand', '', null, 'IconFullscreenExpand');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--fullscreenExpand');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExpand', '', newVal, 'IconFullscreenExpand');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-fullscreen-expand', IconFullscreenExpand);
