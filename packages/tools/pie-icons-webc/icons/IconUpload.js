import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--upload"><path d="M5.926 5.051 5 4.124 7.23 1.875a1.085 1.085 0 0 1 1.54 0l2.231 2.223-.927.953-1.418-1.426V9.75H7.344V3.625L5.926 5.051ZM11.5 6.47H9.995V7.78H11.5a.219.219 0 0 1 .219.219v5.25a.219.219 0 0 1-.219.219h-7a.219.219 0 0 1-.219-.219V8a.219.219 0 0 1 .219-.219h1.505V6.47H4.5A1.54 1.54 0 0 0 2.969 8v5.25A1.54 1.54 0 0 0 4.5 14.781h7a1.54 1.54 0 0 0 1.531-1.531V8A1.54 1.54 0 0 0 11.5 6.469Z"></path></svg>';

export class IconUpload extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconUpload');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconUpload');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-upload', IconUpload);
