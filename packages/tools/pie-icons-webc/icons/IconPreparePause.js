
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--preparePause"><g clip-path="url(#prefix__clip0_6395_3736)"><path d="M10.844 7.886h-.875V9.96h.875V7.886Z"></path><path d="M11.526 7.886h.875V9.96h-.875V7.886Z"></path><path fill-rule="evenodd" d="M2.09 9.89h-.005c-.455-.061-.954-.385-1.033-.971-.061-.482.263-.954 1.059-1.54l.044-.035c1.793-1.225 3.972-2.494 6.86-4a50.45 50.45 0 0 1 3.36-1.609l.087-.035.621 1.085-.113.052-.122.053c-.671.294-1.454.636-2.766 1.312.131.342.306.788.455 1.164a3.96 3.96 0 0 1 .648-.061A3.533 3.533 0 0 1 14.71 8.83c0 1.943-1.61 3.527-3.526 3.527A3.522 3.522 0 0 1 7.667 8.9C5.672 9.776 4.071 9.97 3.1 9.97c-.543 0-.9-.06-1.01-.078Zm8.784-3.25-.022.004A2.2 2.2 0 0 0 9.076 8.2a2.424 2.424 0 0 0-.096.621c0 1.217.997 2.214 2.213 2.214a2.222 2.222 0 0 0 2.214-2.214 2.216 2.216 0 0 0-2.214-2.213c-.114 0-.214.015-.32.031ZM8.98 4.771C6.433 6.12 4.482 7.265 2.855 8.376h-.01a4.88 4.88 0 0 0-.375.306c.577.062 2.65.15 5.512-1.32a3.501 3.501 0 0 1 1.4-1.558L8.98 4.77Z" clip-rule="evenodd"></path><path d="m1.516 14.125-.35-1.313H14.79l-.359 1.313H1.516Z"></path></g><defs><clipPath id="prefix__clip0_6395_3736"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export default class IconPreparePause extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPreparePause');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPreparePause');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-prepare-pause', IconPreparePause);
