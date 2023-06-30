import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M12.375 1.219h-8.75A1.54 1.54 0 0 0 2.094 2.75v7.875a1.54 1.54 0 0 0 1.531 1.531h1.628L8 14.904l2.748-2.748h1.627a1.54 1.54 0 0 0 1.531-1.531V2.75a1.54 1.54 0 0 0-1.531-1.531Zm.219 9.406a.219.219 0 0 1-.219.219h-2.17L8 13.049l-2.205-2.205h-2.17a.219.219 0 0 1-.219-.219V2.75a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v7.875ZM8.814 5.83l1.82.263L9.32 7.379l.306 1.811L8 8.341l-1.628.875.307-1.811-1.304-1.313 1.82-.262L8 4.185l.814 1.645Z"></path></svg>';

export class IconReview extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--review', '', null, 'IconReview');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--review');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--review', '', newVal, 'IconReview');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--review', newVal);
    }
}

customElements.define('icon-review', IconReview);
