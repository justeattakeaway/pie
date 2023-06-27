
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pound"><path d="M12.585 11.885c-.315 1.277-1.33 1.803-2.695 1.803H3.625v-1.47h1.12v-3.5h-1.12V7.353h1.12V5.83c0-2.327 1.295-3.727 3.692-3.727A3.911 3.911 0 0 1 11.5 3.328l-1.05 1.067a2.625 2.625 0 0 0-2.012-.822c-1.278 0-2.048.647-2.048 2.187v1.593h3.587v1.365H6.39v3.5h3.5a1.18 1.18 0 0 0 1.277-.823l1.418.49Z"></path></svg>';

export default class IconPound extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPound');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPound');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-pound', IconPound);
