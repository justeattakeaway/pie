import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--helmetLarge"><path d="M24.75 13.235a21.396 21.396 0 0 1 3.973-.394l-1.033-1.75c-.473 0-1.033.053-1.601.123a12.69 12.69 0 0 0-.464-.832 9.014 9.014 0 0 0-.508-.77 10.947 10.947 0 0 0-.55-.708 10.19 10.19 0 0 0-.578-.648l-.114-.131-.595-.569-.088-.07a8.301 8.301 0 0 0-.603-.498l-.123-.088c-.201-.149-.402-.297-.612-.429l-.14-.096a8.618 8.618 0 0 0-.613-.359l-.21-.105a7.464 7.464 0 0 0-.595-.288 2.208 2.208 0 0 0-.253-.123 5.247 5.247 0 0 0-.543-.21l-.315-.105-.56-.166-.367-.088-.508-.113-.429-.062-.49-.07H14.95c-.315 0-.639.053-.962.097A12.04 12.04 0 0 0 3.943 15.536a12.442 12.442 0 0 0 2.082 8.339l.28.376h.464a9.791 9.791 0 0 1 5.88 1.803 6.763 6.763 0 0 0 3.771 1.321 5.547 5.547 0 0 0 4.55-1.925c1.391-1.75 1.636-4.637.718-8.54a2.625 2.625 0 0 1 1.19-2.835c.282-.168.575-.32.875-.455l.122-.052c.284-.131.576-.242.875-.333Zm-2.782-.647a4.375 4.375 0 0 0-1.978 4.716c.779 3.316.648 5.757-.385 7.061a3.814 3.814 0 0 1-3.185 1.26 5.302 5.302 0 0 1-2.853-1.102 11.427 11.427 0 0 0-6.317-2.057 10.78 10.78 0 0 1-1.54-6.764 10.272 10.272 0 0 1 8.488-9.222 9.879 9.879 0 0 1 10.08 5.057 9.542 9.542 0 0 0-2.32 1.05h.01Zm-7.263-2.625a6.808 6.808 0 0 0-5.521 6.124l-1.75-.175a8.593 8.593 0 0 1 7-7.656l.271 1.707Zm2.984 11.707a1.619 1.619 0 1 1-1.61-1.61 1.61 1.61 0 0 1 1.601 1.593l.009.017Z"></path></svg>';

export class IconHelmetLarge extends HTMLElement {
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

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--helmetLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--helmetLarge', '', newVal, 'IconHelmetLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-helmet-large', IconHelmetLarge);
