
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--stopwatchFilled"><path d="M8 3.695A5.547 5.547 0 0 0 3.336 6.25H5.83a.665.665 0 0 1 .656.656v4.821a.665.665 0 0 1-.656.657H3.433A5.546 5.546 0 0 0 13.55 9.076 5.548 5.548 0 0 0 8 3.695Zm2.398 6.44-.727 1.094L7.344 9.67V6.705h1.312V8.97l1.742 1.164Z"></path><path d="m10.179 2.514-.315-1.295H6.136l-.315 1.295v.017h4.358v-.017Z"></path><path d="M5.375 8.656V7.344H1l.438 1.312h3.937Z"></path><path d="M5.375 11.281V9.97H2.531l.438 1.312h2.406Z"></path></svg>';

export default class IconStopwatchFilled extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconStopwatchFilled');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconStopwatchFilled');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-stopwatch-filled', IconStopwatchFilled);
