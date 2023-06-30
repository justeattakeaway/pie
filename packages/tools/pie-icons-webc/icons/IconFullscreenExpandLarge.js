import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--fullscreenExpandLarge"><path d="M5.5 5.375h8.583l-.983 1.75H7.25v5.85l-1.75.983V5.375Z"></path><path d="M18.9 7.125h5.85v5.848l1.75.981V5.375h-8.583l.983 1.75Z"></path><path d="M26.5 26.375h-8.58l.982-1.75h5.848v-5.848l1.75-.982v8.58Z"></path><path d="M5.5 26.375v-8.583l1.75.983v5.85h5.848l.981 1.75H5.5Z"></path></svg>';

export class IconFullscreenExpandLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--fullscreenExpandLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExpandLarge', '', newVal, 'IconFullscreenExpandLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-fullscreen-expand-large', IconFullscreenExpandLarge);
