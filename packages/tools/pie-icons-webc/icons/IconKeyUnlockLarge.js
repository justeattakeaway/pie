import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><g clip-path="url(#prefix__clip0_18_2240)"><path d="M29.125 7.25v17.5a2.625 2.625 0 0 1-2.625 2.625h-9.625a2.625 2.625 0 0 1-2.625-2.625v-2.625H16v2.625a.875.875 0 0 0 .875.875H26.5a.875.875 0 0 0 .875-.875V7.25a.875.875 0 0 0-.875-.875h-9.625A.875.875 0 0 0 16 7.25v2.625h-1.75V7.25a2.625 2.625 0 0 1 2.625-2.625H26.5a2.625 2.625 0 0 1 2.625 2.625ZM15.23 20.148h-1.103l-.988-.998-.744.744a5.862 5.862 0 0 1-4.454 2.047 5.94 5.94 0 1 1 4.218-10.088h6.177L22.484 16l-4.148 4.148h-1.093l-1.007-1.007-1.006 1.007Zm-.543-1.925 1.55-1.55 1.513 1.55L20.016 16l-2.406-2.398h-6.239l-.262-.306a4.192 4.192 0 1 0 0 5.408l2.039-2.039 1.54 1.558ZM6.97 14.53a1.47 1.47 0 1 0 .017 2.94 1.47 1.47 0 0 0-.017-2.94Zm16.905-2.03v6.125h1.75V12.5h-1.75Z"></path></g><defs><clipPath id="prefix__clip0_18_2240"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>';

export class IconKeyUnlockLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--keyUnlockLarge', '', null, 'IconKeyUnlockLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--keyUnlockLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--keyUnlockLarge', '', newVal, 'IconKeyUnlockLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--keyUnlockLarge', newVal);
    }
}

customElements.define('icon-key-unlock-large', IconKeyUnlockLarge);
