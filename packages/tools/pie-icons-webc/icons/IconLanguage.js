import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--language"><path d="M14.946 7.08c0-.264-.09-.518-.145-.772a7.053 7.053 0 0 0-2.282-3.667A7.015 7.015 0 0 0 8.534 1H7.475a7.005 7.005 0 0 0-3.674 1.387 7.039 7.039 0 0 0-2.358 3.15c-.081.236-.163.48-.226.735a7.28 7.28 0 0 0-.145.77c-.045.301-.07.604-.072.908.001.304.025.607.072.907.024.288.07.573.136.853a7.044 7.044 0 0 0 2.285 3.657A7.006 7.006 0 0 0 7.475 15H8.534a6.986 6.986 0 0 0 3.676-1.384 7.021 7.021 0 0 0 2.356-3.153 6.33 6.33 0 0 0 .226-.753c.063-.254.111-.511.145-.77.039-.302.06-.605.063-.908a7.96 7.96 0 0 0-.054-.953Zm-2.09-1.96a22.505 22.505 0 0 0-2.052-.336A9.88 9.88 0 0 0 9.8 2.634a5.647 5.647 0 0 1 3.057 2.485ZM8 2.451a8.77 8.77 0 0 1 1.311 2.195 25.118 25.118 0 0 0-2.613 0A8.734 8.734 0 0 1 8 2.452Zm-1.809.172c-.4.68-.722 1.405-.958 2.16-.688.081-1.366.19-2.044.326a5.675 5.675 0 0 1 3.02-2.477l-.018-.009ZM2.52 9.33a6.75 6.75 0 0 1-.108-.617v-.045a5.315 5.315 0 0 1 0-.662 5.579 5.579 0 0 1 0-.672c.021-.226.057-.45.108-.671.76-.195 1.53-.35 2.307-.463-.222 1.2-.222 2.43 0 3.63a20.491 20.491 0 0 1-2.307-.5Zm.624 1.552c.688.145 1.375.245 2.062.335.248.762.589 1.49 1.013 2.169a5.729 5.729 0 0 1-3.084-2.504h.01Zm4.866 2.722a8.926 8.926 0 0 1-1.32-2.26H9.32A8.69 8.69 0 0 1 8 13.558l.009.046Zm-1.754-3.63a8.783 8.783 0 0 1 0-3.892c1.164-.09 2.335-.09 3.5 0a8.782 8.782 0 0 1 0 3.874 22.78 22.78 0 0 1-3.51 0l.01.018Zm3.554 3.43c.419-.685.759-1.415 1.013-2.178a22.434 22.434 0 0 0 2.053-.326A5.71 5.71 0 0 1 9.8 13.385l.009.018Zm3.816-4.718v.045c0 .21-.063.418-.108.617-.763.195-1.536.35-2.316.463a10.365 10.365 0 0 0 0-3.584c.777.11 1.547.264 2.307.463 0 .2.09.408.117.617a.12.12 0 0 0 0 .054c.014.22.014.442 0 .663.01.214.007.43-.009.644l.01.018Z"></path></svg>';

export class IconLanguage extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--language', '', null, 'IconLanguage');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--language');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--language', '', newVal, 'IconLanguage');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-language', IconLanguage);
