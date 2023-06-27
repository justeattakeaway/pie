
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--eyeOnLarge"><path d="M24.024 10.094a11.375 11.375 0 0 0-16.048 0L2.08 16l5.897 5.906a11.375 11.375 0 0 0 16.048 0L29.92 16l-5.897-5.906Zm-1.243 10.57a9.625 9.625 0 0 1-13.562 0L4.546 16l4.673-4.664a9.625 9.625 0 0 1 13.562 0L27.454 16l-4.673 4.664Zm-6.78-9.477A4.813 4.813 0 1 0 20.812 16 4.821 4.821 0 0 0 16 11.187Zm0 7.876A3.062 3.062 0 1 1 16 12.938a3.062 3.062 0 0 1 0 6.124Z"></path></svg>';

export class IconEyeOnLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconEyeOnLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconEyeOnLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-eye-on-large', IconEyeOnLarge);
