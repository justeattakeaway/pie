import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cloudDownloadLarge"><path d="M26.019 14.731A10.045 10.045 0 0 0 6.2 13.375a6.309 6.309 0 0 0-3.938 5.863 6.387 6.387 0 0 0 6.388 6.387h15.487a5.609 5.609 0 0 0 5.6-5.6 5.68 5.68 0 0 0-3.718-5.294Zm-1.881 9.144H8.65a4.646 4.646 0 0 1-4.638-4.637 4.585 4.585 0 0 1 3.247-4.375A4.137 4.137 0 0 1 8.65 14.6c.453 0 .904.065 1.339.193l.525-1.672a6.555 6.555 0 0 0-2.389-.254 8.304 8.304 0 0 1 16.152 2.538v.691l.674.158a3.894 3.894 0 0 1 3.037 3.771 3.85 3.85 0 0 1-3.85 3.85Zm-4.822-8.059 1.243 1.243-3.413 3.412a1.505 1.505 0 0 1-1.041.429 1.46 1.46 0 0 1-1.033-.429l-3.447-3.412 1.234-1.243 2.336 2.336v-6.527h1.75v6.527l2.371-2.336Z"></path></svg>';

export class IconCloudDownloadLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--cloudDownloadLarge', '', null, 'IconCloudDownloadLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--cloudDownloadLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cloudDownloadLarge', '', newVal, 'IconCloudDownloadLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-cloud-download-large', IconCloudDownloadLarge);
