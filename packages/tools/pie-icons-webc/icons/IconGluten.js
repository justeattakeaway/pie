import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M11.933 7.377c-.244.113-.697.314-1.193.566.087-.27.14-.548.14-.845 0-1.341-1.935-4.504-2.318-5.122l-.558-.889-.557.889c-.392.618-2.318 3.78-2.318 5.122 0 .297.061.584.14.854a23.42 23.42 0 0 0-1.202-.575l-.95-.427.035 1.046c.026.81.148 3.537.74 4.417a2.398 2.398 0 0 0 3.32.662c.052-.035.087-.079.139-.114v1.847h1.307V12.97s.07.07.113.096a2.378 2.378 0 0 0 1.795.366 2.366 2.366 0 0 0 1.524-1.01c.593-.88.74-3.599.767-4.418l.035-1.045-.959.427v-.009Zm-5.453 4.6c-.497.331-1.168.2-1.507-.296-.2-.305-.375-1.455-.462-2.649 1.063.54 2.065 1.142 2.265 1.447a1.09 1.09 0 0 1-.296 1.507v-.009Zm-.053-4.879c0-.575.802-2.169 1.569-3.51.766 1.341 1.568 2.935 1.568 3.51 0 .863-.706 1.568-1.568 1.568a1.573 1.573 0 0 1-1.569-1.568Zm4.574 4.583c-.165.244-.41.4-.688.462a1.06 1.06 0 0 1-.81-.166 1.09 1.09 0 0 1-.296-1.507c.2-.305 1.21-.897 2.273-1.429-.096 1.194-.278 2.344-.479 2.649v-.01Z"></path></svg>';

export class IconGluten extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--gluten', '', null, 'IconGluten');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--gluten');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--gluten', '', newVal, 'IconGluten');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--gluten', newVal);
    }
}

customElements.define('icon-gluten', IconGluten);
