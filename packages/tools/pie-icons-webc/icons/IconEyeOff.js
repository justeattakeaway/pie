import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--eyeOff"><path d="m11.64 4.412 2.485-2.537h-1.803l-1.75 1.75a5.329 5.329 0 0 0-4.774-.175c-.692.314-1.31.77-1.814 1.339L1.06 8l2.45 2.686L1 13.25h1.803l1.61-1.61a5.33 5.33 0 0 0 7.603-.429L14.94 8l-2.923-3.211c-.122-.131-.245-.289-.376-.377ZM2.837 8l2.118-2.327A4.095 4.095 0 0 1 8 4.28c.543.002 1.08.118 1.575.341L8.534 5.664A2.406 2.406 0 0 0 5.594 8c0 .18.024.36.07.534L4.439 9.75 2.837 8Zm6.257 0a1.067 1.067 0 0 1-.324.77 1.094 1.094 0 0 1-1.514 0l1.54-1.514c.188.203.294.468.298.744Zm1.951 2.328A4.095 4.095 0 0 1 8 11.718a4.07 4.07 0 0 1-2.625-1.023l.954-.945A2.42 2.42 0 1 0 9.75 6.329l.945-.954c.114.105.236.192.35.315L13.162 8l-2.117 2.328Z"></path></svg>';

export class IconEyeOff extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOff', '', null, 'IconEyeOff');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--eyeOff');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOff', '', newVal, 'IconEyeOff');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-eye-off', IconEyeOff);
