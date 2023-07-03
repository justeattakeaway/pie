import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--swissFranc"><path d="M2.295 8.131A1.444 1.444 0 0 0 4.29 9.537a1.54 1.54 0 0 0 .508-.33l.06-.06.788.795-.052.062a2.52 2.52 0 0 1-1.89.77 2.563 2.563 0 0 1-2.625-2.625 2.564 2.564 0 0 1 2.625-2.625 2.573 2.573 0 0 1 1.89.726l.052.061-.787.814-.061-.088A1.531 1.531 0 0 0 3.695 6.6a1.435 1.435 0 0 0-1.4 1.531Zm7.236-.586H7.545V5.559H6.329v5.127h1.216V8.612h1.986v2.074h1.225V5.56H9.531v1.986Zm5.425-.875V5.559H11.79v5.127h1.225V8.822h1.864V7.755h-1.864v-1.12l1.942.035Z"></path></svg>';

export class IconSwissFranc extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--swissFranc', '', null, 'IconSwissFranc');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--swissFranc');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--swissFranc', '', newVal, 'IconSwissFranc');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-swiss-franc', IconSwissFranc);
