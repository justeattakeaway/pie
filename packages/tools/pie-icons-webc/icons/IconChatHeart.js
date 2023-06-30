import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M8 9.75 5.926 7.589a1.347 1.347 0 0 1 0-1.838 1.199 1.199 0 0 1 .875-.376c.329.002.644.134.875.367L8 6.058l.324-.307a1.225 1.225 0 0 1 1.75 0 1.365 1.365 0 0 1 0 1.846L8 9.75Z"></path><path d="M3.538 14.781H2.094V4.5a1.54 1.54 0 0 1 1.531-1.531h8.75A1.54 1.54 0 0 1 13.906 4.5v6.125a1.54 1.54 0 0 1-1.531 1.531H6.25a.254.254 0 0 0-.157.061l-2.555 2.564Zm.087-10.5a.219.219 0 0 0-.219.219v8.557l1.75-1.75a1.522 1.522 0 0 1 1.094-.463h6.125a.219.219 0 0 0 .219-.219V4.5a.219.219 0 0 0-.219-.219h-8.75Z"></path></svg>';

export class IconChatHeart extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatHeart', '', null, 'IconChatHeart');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--chatHeart');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chatHeart', '', newVal, 'IconChatHeart');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--chatHeart', newVal);
    }
}

customElements.define('icon-chat-heart', IconChatHeart);
