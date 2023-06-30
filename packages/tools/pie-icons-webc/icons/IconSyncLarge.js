import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--syncLarge"><path d="M19.762 4.056 18.1 5.72a10.403 10.403 0 0 1 5.32 2.852 10.499 10.499 0 0 1 0 14.875l-1.234-1.234A8.751 8.751 0 0 0 18.205 7.54l1.557 1.557-1.242 1.243-3.141-3.142a.875.875 0 0 1 0-1.242l3.14-3.141 1.243 1.242Zm-9.948 18.13a8.697 8.697 0 0 0 3.98 2.275l-1.557-1.557 1.243-1.243 3.141 3.141a.874.874 0 0 1 0 1.243l-3.141 3.141-1.243-1.242L13.9 26.28A10.5 10.5 0 0 1 8.57 8.571l1.243 1.243a8.75 8.75 0 0 0 0 12.372Z"></path></svg>';

export class IconSyncLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--syncLarge', '', null, 'IconSyncLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--syncLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--syncLarge', '', newVal, 'IconSyncLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-sync-large', IconSyncLarge);
