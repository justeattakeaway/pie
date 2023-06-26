
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--email"><path d="M13.451 2.802H2.55A1.566 1.566 0 0 0 1 4.36v7.28a1.566 1.566 0 0 0 1.566 1.557h10.885A1.566 1.566 0 0 0 15 11.64V4.36a1.566 1.566 0 0 0-1.549-1.558Zm.254 2.17v6.204L10.354 8.08l3.351-3.107ZM7.58 9.846a.647.647 0 0 0 .884 0l.945-.875 3.15 2.914H3.362l3.22-2.923.998.884Zm5.145-5.731L8 8.472 3.196 4.097l9.529.018ZM5.603 8.079 2.295 11.08V5.069l3.308 3.01Z"></path></svg>;';

export class IconEmail extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconEmail');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconEmail');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-email', IconEmail);
