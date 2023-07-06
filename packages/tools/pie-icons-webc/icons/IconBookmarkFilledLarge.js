import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--bookmarkFilledLarge"><path d="m17.636 14.329.578-.56h.017l1.015-.99-1.4-.21-.796-.113-.359-.717-.63-1.27-.63 1.27-.358.717-.797.114-1.4.21 1.015.989.578.56-.14.796-.236 1.4 1.25-.656.71-.377.708.377 1.252.656-.237-1.4-.14-.796Z"></path><path fill-rule="evenodd" d="M7.268 4.188h17.5a2.633 2.633 0 0 1 2.625 2.625v21.542l-11.358-5.688-11.392 5.688V6.812a2.633 2.633 0 0 1 2.625-2.625Zm13.72 7.297h-.035a.745.745 0 0 1 .62.516.764.764 0 0 1-.192.779l-2.126 2.074.508 2.922a.77.77 0 0 1-.762.901.749.749 0 0 1-.358-.087l-2.625-1.383-2.625 1.383a.766.766 0 0 1-.814-.061.785.785 0 0 1-.306-.753l.507-2.922-2.126-2.074A.734.734 0 0 1 10.46 12a.77.77 0 0 1 .622-.516l2.94-.429 1.32-2.66c.132-.262.403-.394.692-.394.289 0 .56.132.691.394l1.322 2.66 2.94.429Z" clip-rule="evenodd"></path></svg>';

export class IconBookmarkFilledLarge extends HTMLElement {
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

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bookmarkFilledLarge', '', null, 'IconBookmarkFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--bookmarkFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bookmarkFilledLarge', '', newVal, 'IconBookmarkFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-bookmark-filled-large', IconBookmarkFilledLarge);
