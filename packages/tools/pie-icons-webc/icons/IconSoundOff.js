
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--soundOff"><path d="M11.281 4.736v-3.5H9.75l-.166.167A21.623 21.623 0 0 1 7.598 3.1 23.625 23.625 0 0 1 5.19 4.719H2.75A1.54 1.54 0 0 0 1.219 6.25v3.5a1.54 1.54 0 0 0 1.531 1.531h2.441c.837.487 1.64 1.028 2.407 1.619a22.864 22.864 0 0 1 1.986 1.697l.192.184h1.505v-3.5L9.97 12.594v.586c-.508-.464-1.033-.875-1.566-1.313a26.789 26.789 0 0 0-2.372-1.6V5.75c.82-.49 1.61-1.024 2.372-1.601.533-.411 1.058-.875 1.566-1.312v.586l1.312 1.312ZM4.72 9.97H2.75a.219.219 0 0 1-.219-.219v-3.5a.219.219 0 0 1 .219-.219h1.969V9.97Z"></path><path d="M14.633 6.058 12.69 8l1.943 1.943-.928.927-1.943-1.942L9.82 10.87l-.928-.927L10.835 8 8.892 6.058l.928-.928 1.942 1.943 1.943-1.943.928.928Z"></path></svg>;';

export class IconSoundOff extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconSoundOff');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSoundOff');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-sound-off', IconSoundOff);
