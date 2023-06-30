import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--checkCircleLarge"><path d="m27.375 11.38-1.339 1.426a10.587 10.587 0 1 1-2.94-4.55l1.2-1.277a12.206 12.206 0 1 0 3.08 4.375v.026Z"></path><path d="M14.941 19.5h-.096l-3.727-4.2-1.313 1.164 3.745 4.217a1.828 1.828 0 0 0 1.33.578 1.802 1.802 0 0 0 1.33-.587l9.03-9.625 1.26-1.33.936-.997-1.295-1.19-.665.717-1.216 1.295-9.319 9.958Z"></path></svg>';

export class IconCheckCircleLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--checkCircleLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--checkCircleLarge', '', newVal, 'IconCheckCircleLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-check-circle-large', IconCheckCircleLarge);
