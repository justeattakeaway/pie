import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--componentsLarge"><path d="M21.539 9.21 16 3.662 10.453 9.21 16 14.757l5.548-5.547h-.01ZM15.99 6.139l3.072 3.071-3.072 3.071-3.07-3.071 3.07-3.071Z"></path><path d="M22.79 10.453 17.243 16l5.547 5.547L28.338 16l-5.548-5.547ZM19.72 16l3.071-3.071L25.861 16l-3.07 3.071L19.718 16Z"></path><path d="M9.21 10.444 3.663 15.99 9.21 21.54l5.548-5.548-5.548-5.547ZM6.14 15.99 9.21 12.92l3.071 3.071-3.07 3.072-3.072-3.072Z"></path><path d="M10.453 22.781 16 28.33l5.548-5.548L16 17.234l-5.547 5.547ZM16 25.853 12.93 22.78 16 19.71l3.071 3.071-3.07 3.072Z"></path></svg>';

export class IconComponentsLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconComponentsLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconComponentsLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-components-large', IconComponentsLarge);
