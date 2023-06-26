
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--thumbsUp"><path d="M14.072 7.878a1.512 1.512 0 0 0-.962-.753l-1.96-.481.49-2.415a1.75 1.75 0 0 0-.376-1.479 1.75 1.75 0 0 0-1.374-.656H8.875L6.372 7.239a.21.21 0 0 1-.183.105H1.875v1.312h2.739a12.513 12.513 0 0 0-.21 2.328 9.083 9.083 0 0 0 .096 1.61H1.875v1.312h9.065a2.406 2.406 0 0 0 2.24-1.531l1.024-3.272a1.558 1.558 0 0 0-.132-1.225Zm-1.12.822-1.006 3.22a1.076 1.076 0 0 1-1.006.674H5.856a8.05 8.05 0 0 1-.14-1.61 10.99 10.99 0 0 1 .236-2.328h.237a1.575 1.575 0 0 0 1.338-.787L9.75 3.406h.175a.473.473 0 0 1 .455.56l-.761 3.64 3.176.814a.236.236 0 0 1 .14.105.218.218 0 0 1 .018.175Z"></path></svg>;';

export class IconThumbsUp extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconThumbsUp');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconThumbsUp');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-thumbs-up', IconThumbsUp);
