
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--send"><path d="M14.457 1.525a.937.937 0 0 0-.665-.271.665.665 0 0 0-.297.052L1.814 5.13a.936.936 0 0 0 0 1.75l2.047.875v4.454h4.305L9.13 14.3a.936.936 0 0 0 .83.516h.045a.945.945 0 0 0 .83-.621L14.65 2.558a.936.936 0 0 0 .061-.342.918.918 0 0 0-.254-.691ZM3.257 6.04l8.322-2.73-4.585 4.27-3.737-1.54Zm1.9 4.804V8.219l.778.324.726.332.263.578.638 1.4-2.406-.01Zm4.75 1.96L7.94 8.499l4.873-4.541-2.905 8.846Z"></path></svg>';

export class IconSend extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconSend');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSend');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-send', IconSend);
