import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M12.281 1h-8.75A1.54 1.54 0 0 0 2 2.531v7.875a1.54 1.54 0 0 0 1.531 1.531H5.16l2.747 2.748 2.748-2.748h1.627a1.54 1.54 0 0 0 1.531-1.53V2.53A1.54 1.54 0 0 0 12.283 1Zm.219 9.406a.218.218 0 0 1-.219.219h-2.17L7.906 12.83l-2.205-2.205h-2.17a.218.218 0 0 1-.219-.219V2.531a.219.219 0 0 1 .22-.219h8.75a.219.219 0 0 1 .218.22v7.874ZM7.25 6.197h1.313v3.334H7.25V6.197Zm1.531-1.916a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"></path></svg>';

export class IconInfoMarker extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--infoMarker', '', null, 'IconInfoMarker');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--infoMarker');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--infoMarker', '', newVal, 'IconInfoMarker');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--infoMarker', newVal);
    }
}

customElements.define('icon-info-marker', IconInfoMarker);
