import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--giftCard"><path d="M12.646 2.969H3.354L1.219 5.104v5.792l2.135 2.135h9.292l2.135-2.135V5.104l-2.135-2.135Zm.823 7.385-1.365 1.365H3.896l-1.365-1.365V5.646l1.365-1.365h8.208l1.365 1.365v4.708Zm-2.844-3.798L9.242 6.25l-.665-1.225a.691.691 0 0 0-1.154 0L6.758 6.25l-1.383.306a.648.648 0 0 0-.499.455.656.656 0 0 0 .167.657l.953.97-.201 1.427a.665.665 0 0 0 .954.674L8 10.1l1.251.639a.63.63 0 0 0 .306.07.604.604 0 0 0 .377-.123.639.639 0 0 0 .271-.621l-.201-1.426.971-.971a.657.657 0 0 0-.35-1.112Zm-1.75 1.391a.639.639 0 0 0-.184.552l.07.498-.437-.218a.665.665 0 0 0-.595 0l-.438.219.07-.5a.639.639 0 0 0-.236-.55l-.332-.342.498-.096a.639.639 0 0 0 .446-.332L8 6.748l.236.43a.639.639 0 0 0 .446.332l.5.096-.307.341Z"></path></svg>';

export class IconGiftCard extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--giftCard', '', null, 'IconGiftCard');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--giftCard');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--giftCard', '', newVal, 'IconGiftCard');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-gift-card', IconGiftCard);
