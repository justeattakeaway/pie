
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cloud"><g clip-path="url(#prefix__clip0_15_562)"><path d="M12.016 13.189H4.378A3.377 3.377 0 0 1 1 9.81 3.342 3.342 0 0 1 2.969 6.75a5.18 5.18 0 0 1 10.176.682 2.992 2.992 0 0 1-1.129 5.758ZM8 4.124a3.859 3.859 0 0 0-3.815 3.22l-.061.393-.385.114a2.039 2.039 0 0 0-1.426 1.96 2.065 2.065 0 0 0 2.065 2.065h7.638a1.68 1.68 0 0 0 .359-3.316l-.499-.114V7.93A3.885 3.885 0 0 0 8 4.124Z"></path></g><defs><clipPath id="prefix__clip0_15_562"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconCloud extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconCloud');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconCloud');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-cloud', IconCloud);
