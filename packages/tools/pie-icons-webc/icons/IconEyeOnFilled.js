import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M12.017 4.789a5.337 5.337 0 0 0-8.033 0L1.062 8l2.922 3.211a5.337 5.337 0 0 0 8.032 0l2.923-3.21-2.922-3.212Zm-2.32 4.909a2.398 2.398 0 1 1 0-3.395 2.38 2.38 0 0 1 0 3.395Z"></path><path d="M8 6.906a1.059 1.059 0 0 0-.77.324 1.085 1.085 0 1 0 1.54 0A1.059 1.059 0 0 0 8 6.906Z"></path></svg>';

export class IconEyeOnFilled extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOnFilled', '', null, 'IconEyeOnFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--eyeOnFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOnFilled', '', newVal, 'IconEyeOnFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--eyeOnFilled', newVal);
    }
}

customElements.define('icon-eye-on-filled', IconEyeOnFilled);
