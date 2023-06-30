import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M4.246 9.75a2.625 2.625 0 0 1 2.45-1.969h2.625a2.625 2.625 0 0 1 2.424 1.969h1.374l-.131-.429A3.903 3.903 0 0 0 9.304 6.47h-.315c.35-.136.668-.342.936-.604a2.73 2.73 0 0 0 0-3.85 2.8 2.8 0 0 0-3.85 0 2.73 2.73 0 0 0 0 3.85c.268.262.587.468.936.604h-.315A3.903 3.903 0 0 0 3.004 9.32l-.131.429h1.373Zm2.757-4.821a1.417 1.417 0 0 1 0-1.987 1.418 1.418 0 0 1 1.995 0A1.409 1.409 0 0 1 7.003 4.93Zm5.59 9.625h-1.312a3.282 3.282 0 0 0-6.562 0H3.406a4.593 4.593 0 1 1 9.188 0Z"></path></svg>';

export class IconDriverCar extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--driverCar', '', null, 'IconDriverCar');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--driverCar');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--driverCar', '', newVal, 'IconDriverCar');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--driverCar', newVal);
    }
}

customElements.define('icon-driver-car', IconDriverCar);
