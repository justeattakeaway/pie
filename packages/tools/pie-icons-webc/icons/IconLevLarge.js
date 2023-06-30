import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--levLarge"><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21ZM9.875 12.036h5.25v7.359h-1.75v-5.609h-1.75c-.227 4.944-2.266 5.714-3.5 5.714v-1.75c1.076 0 1.75-1.855 1.75-4.839v-.875Zm11.664 3.5a1.752 1.752 0 0 0 .875-1.444c0-1.172-.875-2.1-2.477-2.1h-3.14v7.403h3.22c1.75 0 2.808-.945 2.808-2.161a1.83 1.83 0 0 0-1.286-1.698Zm-3.019-2.161h1.19c.604 0 1.015.324 1.015.875 0 .551-.411.875-1.015.875h-1.19v-1.75Zm1.391 4.725H18.52v-1.864h1.391c.718 0 1.181.324 1.181.875 0 .552-.463.945-1.18.945v.044Z"></path></svg>';

export class IconLevLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--levLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--levLarge', '', newVal, 'IconLevLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-lev-large', IconLevLarge);
