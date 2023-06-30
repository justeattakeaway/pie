import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--rssLarge"><path d="M8.762 21.355a1.312 1.312 0 1 0 1.853 1.86 1.312 1.312 0 0 0-1.853-1.86Z"></path><path d="M8.5 7v1.5a15 15 0 0 1 15 15H25A16.5 16.5 0 0 0 8.5 7Z"></path><path d="M9.25 11.807v1.5a9.458 9.458 0 0 1 9.442 9.443h1.5A10.957 10.957 0 0 0 9.25 11.807Z"></path><path d="M10 16.615v1.5A3.893 3.893 0 0 1 13.885 22h1.5A5.393 5.393 0 0 0 10 16.615Z"></path></svg>';

export class IconRssLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--rssLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--rssLarge', '', newVal, 'IconRssLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-rss-large', IconRssLarge);
