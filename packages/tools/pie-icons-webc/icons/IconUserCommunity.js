import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M1.744 5.375a6.79 6.79 0 0 1 12.512 0h-1.461a5.469 5.469 0 0 0-9.625 0H1.744Zm-.534 8.75.49-1.391a2.88 2.88 0 0 1 2.021-1.794 2.345 2.345 0 0 1-.481-.367 2.4 2.4 0 0 1 3.395-3.396 2.389 2.389 0 0 1 0 3.396 1.897 1.897 0 0 1-.324.27A3.037 3.037 0 0 1 8 11.378a3.071 3.071 0 0 1 1.697-.533 1.897 1.897 0 0 1-.323-.271 2.406 2.406 0 1 1 3.395 0 2.344 2.344 0 0 1-.482.367 2.886 2.886 0 0 1 2.022 1.75l.49 1.4h-1.4l-.341-.954a1.575 1.575 0 0 0-1.558-.98H9.75a1.575 1.575 0 0 0-1.523 1.015l-.376.954H6.46l.49-1.4c0-.123.105-.236.157-.35a1.75 1.75 0 0 0-.857-.219H4.5a1.584 1.584 0 0 0-1.523 1.015l-.376.954H1.21Zm8.75-5.25a1.067 1.067 0 0 0 .324.77 1.085 1.085 0 1 0-.315-.77H9.96Zm-6.125 0a1.067 1.067 0 0 0 .324.77 1.085 1.085 0 0 0 1.54 0 1.086 1.086 0 0 0-1.532-1.54 1.068 1.068 0 0 0-.323.77h-.009Z"></path></svg>';

export class IconUserCommunity extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--userCommunity', '', null, 'IconUserCommunity');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--userCommunity');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userCommunity', '', newVal, 'IconUserCommunity');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--userCommunity', newVal);
    }
}

customElements.define('icon-user-community', IconUserCommunity);
