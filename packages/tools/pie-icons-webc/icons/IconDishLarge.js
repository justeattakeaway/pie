
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--dishLarge"><path d="M28.688 16.875a11.376 11.376 0 0 1-15.313 10.666v-1.916c.158.07.315.157.473.219a9.766 9.766 0 0 0 3.5.639 9.625 9.625 0 0 0 0-19.25V5.5a11.375 11.375 0 0 1 11.34 11.375ZM10.75 19.789v9.336H9v-9.319C6.935 19.5 4.564 17.934 4.564 15.3V6.226l1.75-.875v6.554a1.287 1.287 0 0 0 1.312 1.251 1.287 1.287 0 0 0 1.313-1.251V6.244l1.75-.875v6.527a1.312 1.312 0 0 0 2.625 0V6.27l1.75-.875V15.3c0 2.581-2.275 4.121-4.314 4.489Zm-.936-1.663c1.032 0 3.5-.814 3.5-2.826v-.674c-.409.201-.858.306-1.313.306a3.08 3.08 0 0 1-2.187-.875 3.062 3.062 0 0 1-2.188.875 3.02 3.02 0 0 1-1.312-.306v.674c0 2.012 2.467 2.826 3.5 2.826Z"></path></svg>;';

export class IconDishLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconDishLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconDishLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-dish-large', IconDishLarge);
