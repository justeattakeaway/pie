import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="m2.426 12.375.49-1.601A1.645 1.645 0 0 1 4.447 9.53H6.25c.319.012.625.126.875.324-.1.19-.182.39-.245.595l-.508 1.925h1.365l.464-1.557A1.662 1.662 0 0 1 9.75 9.53h1.838a1.663 1.663 0 0 1 1.522 1.287l.429 1.557h1.365l-.56-1.925a3.053 3.053 0 0 0-2.083-2.126 2.387 2.387 0 0 0 .499-3.771 2.45 2.45 0 0 0-3.395 0 2.362 2.362 0 0 0-.709 1.697 2.389 2.389 0 0 0 .709 1.698c.097.102.206.193.324.27A2.756 2.756 0 0 0 8 8.876a2.756 2.756 0 0 0-1.689-.612c.118-.079.226-.17.324-.272a2.389 2.389 0 0 0 .709-1.741 2.362 2.362 0 0 0-.709-1.697 2.45 2.45 0 0 0-3.395 0 2.362 2.362 0 0 0-.709 1.697 2.389 2.389 0 0 0 .709 1.698c.145.147.31.274.49.376a3.001 3.001 0 0 0-2.074 2.065l-.604 1.986h1.374Zm7.875-6.895a1.103 1.103 0 0 1 1.78.352 1.076 1.076 0 0 1-.24 1.188 1.085 1.085 0 0 1-1.54 0 1.077 1.077 0 0 1 0-1.54Zm-6.125 0a1.103 1.103 0 0 1 1.78.352 1.076 1.076 0 0 1-.24 1.188 1.085 1.085 0 0 1-1.54 0 1.076 1.076 0 0 1 0-1.54Z"></path></svg>';

export class IconAppUsers extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--appUsers', '', null, 'IconAppUsers');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--appUsers');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--appUsers', '', newVal, 'IconAppUsers');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--appUsers', newVal);
    }
}

customElements.define('icon-app-users', IconAppUsers);
