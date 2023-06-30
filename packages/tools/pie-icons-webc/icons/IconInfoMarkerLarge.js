import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M24.75 3.024H7.25a2.625 2.625 0 0 0-2.625 2.625v15.75a2.625 2.625 0 0 0 2.625 2.625h3.439L16 29.335l5.311-5.311h3.439a2.625 2.625 0 0 0 2.625-2.625V5.649a2.625 2.625 0 0 0-2.625-2.625Zm.875 18.375a.875.875 0 0 1-.875.875h-4.165L16 26.859l-4.585-4.585H7.25a.875.875 0 0 1-.875-.875V5.649a.875.875 0 0 1 .875-.875h17.5a.875.875 0 0 1 .875.875v15.75Zm-10.5-9.774h1.75V19.5h-1.75v-7.875Zm2.188-3.063a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Z"></path></svg>';

export class IconInfoMarkerLarge extends HTMLElement {
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

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--infoMarkerLarge', '', null, 'IconInfoMarkerLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--infoMarkerLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--infoMarkerLarge', '', newVal, 'IconInfoMarkerLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--infoMarkerLarge', newVal);
    }
}

customElements.define('icon-info-marker-large', IconInfoMarkerLarge);
