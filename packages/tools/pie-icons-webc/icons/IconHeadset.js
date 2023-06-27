
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--headset"><path d="M8.219 1.875A5.404 5.404 0 0 0 2.75 7.206v5a2.228 2.228 0 0 0 2.228 2.227h4.05v-1.215h-4.05a1.013 1.013 0 0 1-1.013-1.013v-.227a.808.808 0 0 0 .203 0h.81a1.426 1.426 0 0 0 1.418-1.393v-1.62a1.426 1.426 0 0 0-1.418-1.418H3.965v-.34A4.197 4.197 0 0 1 8.22 3.09a4.197 4.197 0 0 1 4.253 4.115v.34H11.46a1.426 1.426 0 0 0-1.418 1.419v1.62a1.426 1.426 0 0 0 1.418 1.418h.81a1.426 1.426 0 0 0 1.418-1.418V7.206a5.404 5.404 0 0 0-5.47-5.33ZM4.978 8.762a.203.203 0 0 1 .203.203v1.62a.203.203 0 0 1-.203.202h-.81a.202.202 0 0 1-.203-.202V8.762h1.013Zm7.494 1.823a.202.202 0 0 1-.202.202h-.81a.202.202 0 0 1-.203-.202v-1.62a.203.203 0 0 1 .203-.203h1.012v1.823Z"></path></svg>';

export class IconHeadset extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconHeadset');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconHeadset');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-headset', IconHeadset);
