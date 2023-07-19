import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--ribbonHeart"><path d="M13.696 11.955a7.24 7.24 0 0 1-1.522-2.013c.096-.308.144-.63.14-.953a2.08 2.08 0 0 1 .061-.578 2.51 2.51 0 0 1 .35-.411 2.074 2.074 0 0 0 .752-1.4 2.058 2.058 0 0 0-.752-1.391 2.51 2.51 0 0 1-.35-.412 2.124 2.124 0 0 1-.053-.577 2.048 2.048 0 0 0-.454-1.47 2.03 2.03 0 0 0-1.488-.438 2.39 2.39 0 0 1-.569-.06c-.158-.105-.3-.232-.42-.377A2.039 2.039 0 0 0 8 1.131a2.039 2.039 0 0 0-1.391.744 1.916 1.916 0 0 1-.42.35 2.39 2.39 0 0 1-.569.061 2.03 2.03 0 0 0-1.487.438 2.047 2.047 0 0 0-.447 1.487c.007.198-.014.395-.061.586-.102.15-.219.288-.35.412A2.056 2.056 0 0 0 2.531 6.6 2.074 2.074 0 0 0 3.284 8c.13.124.248.262.35.411.044.19.062.384.052.578-.004.323.044.645.14.953a7.237 7.237 0 0 1-1.522 2.013l-.648.604 3.947 2.31.358-.368a11.464 11.464 0 0 0 1.75-2.476c.1.023.203.038.306.044a1.85 1.85 0 0 0 .307-.044c.47.9 1.06 1.732 1.75 2.476l.358.368 3.947-2.31-.683-.604ZM4.23 6.119c.253-.235.46-.513.612-.823.116-.337.17-.693.158-1.05a1.96 1.96 0 0 1 .061-.577 1.75 1.75 0 0 1 .586-.044c.357.01.713-.042 1.05-.158.312-.152.591-.363.823-.62.138-.159.3-.295.481-.403.179.103.341.233.481.385.232.258.511.469.823.621.337.115.693.168 1.05.157.194-.01.388.008.577.053.057.19.08.388.07.586a2.95 2.95 0 0 0 .158 1.05c.152.31.36.588.612.823.123.131.385.393.385.481 0 .087-.262.359-.385.481a2.966 2.966 0 0 0-.612.875A2.95 2.95 0 0 0 11 9.006c.008.195-.012.39-.061.578a1.75 1.75 0 0 1-.586.061 2.975 2.975 0 0 0-1.05.157 2.687 2.687 0 0 0-.823.622c-.131.122-.393.376-.481.376-.088 0-.35-.254-.481-.376a2.687 2.687 0 0 0-.823-.674 2.975 2.975 0 0 0-1.05-.158 2.013 2.013 0 0 1-.577-.052 1.75 1.75 0 0 1-.07-.586 2.949 2.949 0 0 0-.158-1.05 2.966 2.966 0 0 0-.612-.875c-.123-.123-.385-.385-.385-.482 0-.096.262-.297.385-.428Zm1.146 7.079-1.549-.876A8.369 8.369 0 0 0 4.85 10.87c.26.053.523.076.788.07.191-.007.383.014.568.061.149.089.284.198.403.324-.34.668-.754 1.296-1.234 1.873Zm5.25 0a10.045 10.045 0 0 1-1.234-1.9c.119-.126.254-.235.403-.323.185-.047.377-.068.569-.061.264.006.528-.018.787-.07.289.519.632 1.006 1.024 1.452l-1.549.902Z"></path><path d="M8 8.656 6.521 7.125a.998.998 0 0 1 .295-1.58.875.875 0 0 1 1.009.215L8 5.926l.175-.166a.875.875 0 0 1 .647-.28.875.875 0 0 1 .657.28.998.998 0 0 1 0 1.365L8 8.656Z"></path></svg>';

export class IconRibbonHeart extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--ribbonHeart', '', null, 'IconRibbonHeart');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--ribbonHeart');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--ribbonHeart', '', newVal, 'IconRibbonHeart');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-ribbon-heart', IconRibbonHeart);
