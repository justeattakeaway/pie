
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--lockLarge"><path d="M23.875 14.25h-1.75v-3.5a6.125 6.125 0 1 0-12.25 0v3.5h-1.75v-3.5a7.875 7.875 0 0 1 15.75 0v3.5Z"></path><path d="M16 29.125a18.209 18.209 0 0 1-11.043-3.692l-.332-.263V13.375h22.75V25.17l-.332.262A17.92 17.92 0 0 1 16 29.126Zm-9.625-4.804A16.625 16.625 0 0 0 16 27.375a16.267 16.267 0 0 0 9.625-3.054v-9.196H6.375v9.196Z"></path><path d="M16.875 17.75h-1.75V23h1.75v-5.25Z"></path></svg>;';

export class IconLockLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconLockLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconLockLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-lock-large', IconLockLarge);
