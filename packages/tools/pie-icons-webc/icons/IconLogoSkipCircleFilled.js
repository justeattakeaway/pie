import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--skipCircleFilled"><g clip-path="url(#prefix__clip0_4813_3340)"><path fill-rule="evenodd" d="M8 1a7 7 0 1 0 7 7 7.01 7.01 0 0 0-7-7Zm.459 5.582c-.04.247.133.47.402.786l.059.068c.335.386.84.968.814 1.698-.02.304-.103.6-.243.87-.558 1.06-1.497 1.5-2.584 1.5-.734 0-1.369-.34-1.369-.34l.042-.149.322-1.161a.183.183 0 0 1 .119-.123c.06-.02.13.014.168.033l.032.016c.247.122.396.195.86.195.305 0 .671-.154.747-.623.046-.27-.14-.503-.406-.803l-.032-.036-.001-.001c-.367-.426-.87-1.01-.736-1.835.19-1.18 1.351-2.142 2.627-2.142.303-.004.604.058.881.182l.011.005.035.017.234.114-.339 1.205a.18.18 0 0 1-.257.107c-.03-.014-.058-.029-.085-.043-.179-.092-.306-.157-.664-.157-.374 0-.588.31-.637.617Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_4813_3340"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconLogoSkipCircleFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--skipCircleFilled', '', null, 'IconLogoSkipCircleFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--skipCircleFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--skipCircleFilled', '', newVal, 'IconLogoSkipCircleFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-logo-skip-circle-filled', IconLogoSkipCircleFilled);
