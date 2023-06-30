import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--dish"><path d="M13.469 8a4.603 4.603 0 0 0-4.594-4.594V2.094A5.906 5.906 0 1 1 6.25 13.25v-1.496c.762.558 1.68.864 2.625.875A4.603 4.603 0 0 0 13.469 8ZM3.188 6.801a.665.665 0 0 0 .656-.656v-3.64l1.295-.63v4.27a.656.656 0 1 0 1.312 0v-3.64l1.313-.63v6.352a3.08 3.08 0 0 1-2.625 2.87v3.028H3.844v-3.027a3.08 3.08 0 0 1-2.625-2.87V2.61l1.312-.639v4.174a.665.665 0 0 0 .656.656Zm0 1.313A2.074 2.074 0 0 1 2.53 8v.236c0 1.164 1.391 1.636 1.969 1.636.577 0 1.969-.472 1.969-1.636V8c-.211.076-.433.117-.657.123A1.951 1.951 0 0 1 4.5 7.598c-.358.33-.826.513-1.313.516Z"></path></svg>';

export class IconDish extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--dish');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--dish', '', newVal, 'IconDish');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-dish', IconDish);
