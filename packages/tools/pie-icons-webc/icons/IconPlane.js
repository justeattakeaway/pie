
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--plane"><path d="m10.931 15-1.881-.595a3.316 3.316 0 0 0-2.1 0L5.069 15l-.044-1.505.35-.192a.875.875 0 0 0 .446-.77V10.45l-3.832.77V8.919a1.426 1.426 0 0 1 .761-1.243l3.106-1.75v-2.52a2.188 2.188 0 0 1 4.375 0v2.555l3.107 1.75a1.427 1.427 0 0 1 .726 1.243v2.301l-3.877-.805v2.083a.875.875 0 0 0 .447.77l.341.192L10.931 15ZM8 12.918a4.7 4.7 0 0 1 .928.096 2.196 2.196 0 0 1-.053-.481V8.875l3.832.77v-.7a.113.113 0 0 0-.052-.096L8.875 6.73V3.406a.875.875 0 0 0-1.75 0v3.325l-3.78 2.091a.114.114 0 0 0-.052.097v.7l3.832-.744v3.684c0 .162-.017.323-.052.481A4.7 4.7 0 0 1 8 12.918Z"></path></svg>';

export class IconPlane extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPlane');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPlane');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-plane', IconPlane);
