
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--engineers"><path d="M13.023 9.286V3.581c0-.91-.744-1.654-1.654-1.654H4.64c-.91 0-1.654.744-1.654 1.654v5.705l-1.776 1.68v1.094c0 .91.744 1.654 1.654 1.654h10.264c.91 0 1.653-.744 1.653-1.654v-1.094l-1.767-1.68h.009ZM4.64 3.231h6.729c.192 0 .341.158.341.341V8.91H4.29V3.581c0-.192.157-.341.341-.341l.009-.009Zm8.837 8.82a.342.342 0 0 1-.34.341H2.871a.342.342 0 0 1-.34-.34v-.526l1.373-1.303h8.199l1.373 1.303v.525Z"></path><path d="m6.722 6.469-.463-.464.463-.473-.612-.612-1.076 1.085L6.11 7.081l.612-.612Z"></path><path d="m9.741 6.005-.464.464.613.612 1.076-1.076L9.89 4.92l-.613.612.464.473Z"></path><path d="M6.644 7.641h.988l1.645-3.054h-.98L6.644 7.641Z"></path></svg>';

export default class IconEngineers extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconEngineers');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconEngineers');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-engineers', IconEngineers);
