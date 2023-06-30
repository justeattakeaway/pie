import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M10.75 17.75h-3.5v1.75h3.5v-1.75Z"></path><path d="M24.75 17.75h-3.5v1.75h3.5v-1.75Z"></path><path d="M26.5 22.003a.99.99 0 0 1-.499.21c-3.307.53-6.652.793-10.001.787a63.8 63.8 0 0 1-9.984-.788 1.085 1.085 0 0 1-.516-.21v-5.59c-.002-.151.028-.3.088-.438l.734-1.75c3.193.59 6.432.892 9.678.901h.157a8.994 8.994 0 0 1-1.268-1.75 51.692 51.692 0 0 1-7.875-.77L8.23 7.827a.761.761 0 0 1 .473-.577 28.761 28.761 0 0 1 5.547-.814c.183-.632.442-1.24.77-1.811-2.293.082-4.57.398-6.799.945a2.494 2.494 0 0 0-1.689 1.829l-.857 3.351H3.313l-.876 1.75h2.74l-1.2 2.783c-.15.357-.227.74-.227 1.128V26.5H5.5v-2.625l.21.052c3.403.541 6.844.816 10.29.823a63.94 63.94 0 0 0 10.308-.814l.192-.061V26.5h1.75V16.411c0-.179-.018-.358-.052-.534a8.186 8.186 0 0 1-1.698 1.13v4.995Z"></path><path d="M23.438 5.334h-1.75v4.454l3.237 1.977.901-1.523-2.389-1.46V5.333Z"></path><path d="M22.563 2.219a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 12.25a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5Z"></path><path d="M23.438 5.5h-1.75v4.393l3.237 1.942.901-1.505-2.389-1.435V5.5Z"></path></svg>';

export class IconCarClockLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--carClockLarge', '', null, 'IconCarClockLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--carClockLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--carClockLarge', '', newVal, 'IconCarClockLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--carClockLarge', newVal);
    }
}

customElements.define('icon-car-clock-large', IconCarClockLarge);
