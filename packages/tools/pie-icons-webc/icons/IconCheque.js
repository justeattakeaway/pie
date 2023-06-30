import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cheque"><path d="m13.119 4.719.358-.368a1.873 1.873 0 0 0 .56-1.356 1.864 1.864 0 0 0-.56-1.348 1.898 1.898 0 0 0-2.703 0L7.703 4.72H1.218v8.312H14.78V4.72H13.12Zm-4.183.656 2.765-2.8a.595.595 0 0 1 .875 0 .603.603 0 0 1 0 .875L9.794 6.189l-.998.14.14-.954Zm4.533 6.387H2.53v-5.73H7.51l-.263 1.845 3.16-.455 1.4-1.39h1.662v5.73ZM3.625 9.095h5.25v1.312h-5.25V9.094Zm7 0h1.75v1.312h-1.75V9.094Z"></path></svg>';

export class IconCheque extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--cheque');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--cheque', '', newVal, 'IconCheque');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-cheque', IconCheque);
