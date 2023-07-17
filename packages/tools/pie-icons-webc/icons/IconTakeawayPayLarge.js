import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--takeawayPayLarge"><path d="M27.48 6.349H4.52C3.129 6.349 2 7.425 2 8.746v14.508c0 1.321 1.129 2.397 2.52 2.397h22.96c1.383 0 2.52-1.076 2.52-2.397V8.746c0-1.321-1.129-2.397-2.52-2.397Zm.77 16.896c0 .359-.341.647-.77.647H4.52c-.42 0-.77-.288-.77-.647V8.746c0-.358.341-.647.77-.647h22.96c.42 0 .77.289.77.647v14.508-.009Z"></path><path d="M16.367 13.751h-1.96v4.874h1.033v-1.619h.928c1.015 0 1.732-.682 1.732-1.627s-.709-1.628-1.733-1.628Zm-.096 2.371h-.831v-1.487h.831c.455 0 .77.289.77.744s-.315.743-.77.743Z"></path><path d="M11.599 14.556s-.027-.035-.027-.061c-.06-.726-.166-1.444-.166-1.444a.217.217 0 0 0-.175-.157l-.595-.07a.12.12 0 0 0-.122.122v.718s-.788-.91-1.19-1.155a.535.535 0 0 0-.289-.088.488.488 0 0 0-.289.088c-2.004 1.233-3.106 3.255-3.15 3.36a.259.259 0 0 0-.017.087.19.19 0 0 0 .149.193l.577.113a.187.187 0 0 1 .14.167c0 .105.114 2.38.254 2.966.017.088.105.149.192.149l4.27-.018a.197.197 0 0 0 .193-.148c.14-.596.245-2.87.254-2.967a.199.199 0 0 1 .14-.166l.577-.114c.088-.017.149-.105.149-.192 0-.018 0-.044-.018-.07-.017-.062-.323-.613-.883-1.313h.026Z"></path><path d="M20.314 14.836c-.735 0-1.26.263-1.54.604l.595.577c.166-.183.481-.314.857-.314.455 0 .788.21.788.665v.06l-.963.044c-1.006.053-1.505.455-1.505 1.12 0 .71.578 1.12 1.383 1.12.507 0 .91-.183 1.129-.49h.017v.394h.91v-2.319c0-.848-.578-1.478-1.662-1.478l-.01.017Zm.7 2.424c0 .446-.394.752-.91.752-.333 0-.595-.14-.595-.428 0-.263.236-.412.647-.438l.858-.052v.166Z"></path><path d="M24.47 17.453h-.017l-.954-2.53H22.43l1.488 3.72c-.184.402-.324.55-.727.55a1.59 1.59 0 0 1-.323-.034v.857c.114.027.28.044.411.044.936 0 1.286-.499 1.671-1.444l1.488-3.701h-1.033l-.953 2.529.017.009Z"></path></svg>';

export class IconTakeawayPayLarge extends HTMLElement {
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

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--takeawayPayLarge', '', null, 'IconTakeawayPayLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--takeawayPayLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--takeawayPayLarge', '', newVal, 'IconTakeawayPayLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-takeaway-pay-large', IconTakeawayPayLarge);
