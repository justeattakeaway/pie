import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><g clip-path="url(#prefix__clip0_222_289)"><path d="M13.145 7.431A5.18 5.18 0 0 0 2.969 6.75 3.342 3.342 0 0 0 1 9.81a3.377 3.377 0 0 0 3.378 3.378h.796L3.756 11.77a2.065 2.065 0 0 1-1.053-3.175c.256-.353.62-.614 1.036-.745l.385-.114.061-.393a3.867 3.867 0 0 1 7.683.586v.516l.498.114a1.689 1.689 0 0 1 1.313 1.645 1.671 1.671 0 0 1-1.54 1.654l-1.321 1.33h1.19a2.992 2.992 0 0 0 1.128-5.758h.009Z"></path><path d="M10.214 10.091 8.656 11.65V7.125H7.344v4.524L5.786 10.09l-.927.928 2.406 2.397a1.032 1.032 0 0 0 1.47 0l2.406-2.397-.927-.928Z"></path></g><defs><clipPath id="prefix__clip0_222_289"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconCloudDownload extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--cloudDownload', '', null, 'IconCloudDownload');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--cloudDownload');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cloudDownload', '', newVal, 'IconCloudDownload');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--cloudDownload', newVal);
    }
}

customElements.define('icon-cloud-download', IconCloudDownload);
