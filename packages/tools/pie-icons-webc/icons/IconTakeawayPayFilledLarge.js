import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--takeawayPayFilledLarge"><path d="M15.44 16.122h.831c.455 0 .77-.288.77-.743s-.315-.744-.77-.744h-.831v1.487Z"></path><path d="M21.014 17.26c0 .446-.394.752-.91.752-.333 0-.595-.14-.595-.428 0-.263.236-.412.647-.438l.858-.052v.166Z"></path><path fill-rule="evenodd" d="M27.48 6.349H4.52C3.129 6.349 2 7.425 2 8.746v14.508c0 1.321 1.129 2.397 2.52 2.397h22.96c1.383 0 2.52-1.076 2.52-2.397V8.746c0-1.321-1.129-2.397-2.52-2.397Zm-15.908 8.146c0 .026.027.061.027.061h-.027c.56.7.867 1.252.884 1.313a.118.118 0 0 1 .018.07c0 .087-.062.175-.15.192l-.577.114a.198.198 0 0 0-.14.166l-.01.183c-.031.569-.125 2.28-.243 2.784a.197.197 0 0 1-.193.148l-4.27.018c-.087 0-.175-.061-.192-.149-.14-.586-.254-2.861-.254-2.966a.187.187 0 0 0-.14-.166l-.578-.114a.19.19 0 0 1-.148-.193c0-.035.008-.061.017-.087.044-.105 1.146-2.127 3.15-3.36a.488.488 0 0 1 .289-.088c.105 0 .21.035.289.088.402.245 1.19 1.155 1.19 1.155v-.718a.12.12 0 0 1 .122-.122l.595.07a.217.217 0 0 1 .175.157s.105.718.166 1.444Zm2.835-.744h1.96c1.024 0 1.733.683 1.733 1.628 0 .945-.718 1.627-1.733 1.627h-.927v1.619h-1.033v-4.874Zm5.907 1.085c-.735 0-1.26.263-1.54.604l.595.577c.166-.183.48-.314.857-.314.455 0 .788.21.788.665v.06l-.963.044c-1.006.053-1.505.455-1.505 1.12 0 .71.578 1.12 1.383 1.12.507 0 .91-.183 1.128-.49h.018v.394h.91v-2.319c0-.848-.578-1.478-1.663-1.478l-.008.017Zm4.138 2.617h.018l-.018-.01.954-2.528h1.033l-1.488 3.701c-.385.945-.735 1.444-1.671 1.444-.131 0-.298-.017-.411-.044v-.857c.078.017.2.035.323.035.403 0 .543-.149.727-.552l-1.488-3.718H23.5l.953 2.529Z" clip-rule="evenodd"></path></svg>';

export class IconTakeawayPayFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--takeawayPayFilledLarge', '', null, 'IconTakeawayPayFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--takeawayPayFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--takeawayPayFilledLarge', '', newVal, 'IconTakeawayPayFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-takeaway-pay-filled-large', IconTakeawayPayFilledLarge);
