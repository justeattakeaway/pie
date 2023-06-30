import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--playCircleLarge"><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Z"></path><path d="m21.425 14.766-7.516-3.928a1.417 1.417 0 0 0-1.462-.088 1.46 1.46 0 0 0-.778 1.304v7.875a1.46 1.46 0 0 0 1.444 1.487c.274 0 .542-.083.77-.236l7.56-3.964A1.462 1.462 0 0 0 22.124 16a1.479 1.479 0 0 0-.7-1.234Zm-8.05 4.734v-7l6.659 3.5-6.659 3.5Z"></path></svg>';

export class IconPlayCircleLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--playCircleLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--playCircleLarge', '', newVal, 'IconPlayCircleLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-play-circle-large', IconPlayCircleLarge);
