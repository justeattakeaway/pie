import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="m17.855 7.53 1.286 1.19L16 12.115a1.189 1.189 0 0 1-1.35.286 1.217 1.217 0 0 1-.4-.277l-1.26-1.374 1.304-1.164.831.893 2.73-2.949Zm-7.98 6.72V3.75h7.875a4.375 4.375 0 0 1 4.375 4.375v6.125h1.75V16H8.125v-1.75h1.75Zm1.75 0h8.75V8.125A2.625 2.625 0 0 0 17.75 5.5h-6.125v8.75ZM28.25 9v18.375H3.75V9h4.375v1.75H5.5v8.75h21v-8.75h-2.625V9h4.375ZM26.5 25.625V21.25h-21v4.375h21Z"></path></svg>';

export class IconBallotBoxLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--ballotBoxLarge', '', null, 'IconBallotBoxLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--ballotBoxLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--ballotBoxLarge', '', newVal, 'IconBallotBoxLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--ballotBoxLarge', newVal);
    }
}

customElements.define('icon-ballot-box-large', IconBallotBoxLarge);
