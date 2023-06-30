import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--downloadLarge"><path d="M15.125 17.024V2.875h1.75v14.219l4.016-4.078 1.234 1.234-4.926 4.935a1.75 1.75 0 0 1-2.398 0L9.875 14.25l1.234-1.234 4.016 4.008ZM24.75 7.25H19.5V9h5.25a.875.875 0 0 1 .875.875v15.75a.875.875 0 0 1-.875.875H7.25a.875.875 0 0 1-.875-.875V9.875A.875.875 0 0 1 7.25 9h5.25V7.25H7.25a2.625 2.625 0 0 0-2.625 2.625v15.75A2.625 2.625 0 0 0 7.25 28.25h17.5a2.625 2.625 0 0 0 2.625-2.625V9.875A2.625 2.625 0 0 0 24.75 7.25Z"></path></svg>';

export class IconDownloadLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--downloadLarge', '', null, 'IconDownloadLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--downloadLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--downloadLarge', '', newVal, 'IconDownloadLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-download-large', IconDownloadLarge);
