import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--tutorialLarge"><path fill-rule="evenodd" d="m24.557 15.479 4.612-1.938v-1.61L16.34 6.541h-.682L2.83 11.931v1.392h-.009V19h1.75v-4.728l2.862 1.202v6.746l.306.263a12.666 12.666 0 0 0 8.251 3.036v-.009c2.783 0 5.565-.901 7.866-2.721l.7-.551v-6.76Zm-17.123-1.9v-.003L16 17.181l10.57-4.445L16 8.3 5.43 12.736l2.004.843Zm15.338 7.846c-3.98 3.15-9.633 3.115-13.588-.018v-5.18L16 19.09l6.807-2.861v5.17l-.035.027Z" clip-rule="evenodd"></path></svg>';

export class IconTutorialLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--tutorialLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--tutorialLarge', '', newVal, 'IconTutorialLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-tutorial-large', IconTutorialLarge);
