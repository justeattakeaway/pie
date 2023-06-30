import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--atomLarge"><path d="M25.861 11.826c1.75-3.5 1.032-5.294.096-6.221-1.899-1.908-5.425-.98-9.957 2.52-4.445-3.5-8.041-4.463-9.958-2.538-1.916 1.925-.953 5.522 2.538 9.975-3.5 4.454-4.463 8.042-2.538 9.958a3.36 3.36 0 0 0 2.494.98c1.934 0 4.48-1.199 7.455-3.5 2.94 2.31 5.504 3.5 7.464 3.5a3.385 3.385 0 0 0 2.502-.98c1.925-1.916.954-5.504-2.537-9.958a23.279 23.279 0 0 0 2.441-3.736ZM24.75 6.84c1.146 1.146.148 3.928-2.442 7.332-.743-.796-1.522-1.671-2.388-2.546a43.566 43.566 0 0 0-2.529-2.363c3.439-2.598 6.221-3.535 7.359-2.423ZM7.25 24.286c-1.12-1.146-.123-3.911 2.467-7.332a50.58 50.58 0 0 0 2.363 2.528c.866.867 1.75 1.654 2.528 2.363-3.438 2.616-6.22 3.552-7.358 2.441Zm17.447 0c-1.584 1.584-6.273-.875-11.375-6.037-.875-.92-1.75-1.812-2.476-2.687.735-.875 1.566-1.75 2.476-2.686.42-.42.875-.822 1.26-1.216l-1.207-1.278c-.438.403-.875.823-1.304 1.26-.875.875-1.645 1.75-2.362 2.53-2.582-3.422-3.58-6.187-2.46-7.333a1.75 1.75 0 0 1 1.34-.464c2.16 0 5.993 2.406 10.097 6.501.875.919 1.75 1.811 2.476 2.686-.735.875-1.566 1.75-2.476 2.687-.446.446-.875.875-1.339 1.277l1.19 1.286c.464-.428.928-.875 1.383-1.33a43.538 43.538 0 0 0 2.353-2.537c2.6 3.43 3.597 6.195 2.477 7.341h-.053ZM16 17.505a1.943 1.943 0 1 1 1.942-1.943A1.935 1.935 0 0 1 16 17.505Z"></path></svg>';

export class IconAtomLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--atomLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--atomLarge', '', newVal, 'IconAtomLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-atom-large', IconAtomLarge);
