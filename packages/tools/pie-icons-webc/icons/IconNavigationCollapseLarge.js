import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--navigationCollapseLarge"><path d="M4.625 4.625v22.75H23A4.375 4.375 0 0 0 27.375 23V4.625H4.625Zm1.75 1.75h1.75v19.25h-1.75V6.375ZM25.625 23A2.625 2.625 0 0 1 23 25.625H9.875V6.375h15.75V23Z"></path><path d="m19.614 16.945-1.243-1.242-2.861 2.87a1.305 1.305 0 0 0 0 1.854l2.861 2.87 1.243-1.242-1.68-1.68h5.941v-1.75h-5.941l1.68-1.68Z"></path></svg>';

export class IconNavigationCollapseLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationCollapseLarge', '', null, 'IconNavigationCollapseLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--navigationCollapseLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--navigationCollapseLarge', '', newVal, 'IconNavigationCollapseLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-navigation-collapse-large', IconNavigationCollapseLarge);
