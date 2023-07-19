import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--bloggerCircleFilledLarge"><path d="M13.375 14.399c.081.009.164.009.245 0h2.537a.875.875 0 0 0-.052-1.706h-2.721a.875.875 0 0 0 0 1.67l-.009.036Z"></path><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.93 14.691a4.471 4.471 0 0 1-3.316 4.314 4.55 4.55 0 0 1-1.138.14h-4.821a4.445 4.445 0 0 1-4.331-3.456 4.533 4.533 0 0 1-.114-.971v-4.935a4.454 4.454 0 0 1 3.342-4.297c.364-.09.737-.137 1.112-.14h2.266a4.454 4.454 0 0 1 4.445 4.428.875.875 0 0 0 .578.805.875.875 0 0 0 .332.061h.77c.192 0 .379.068.525.192a.874.874 0 0 1 .35.7v3.16Z"></path><path d="M18.826 17.75a.956.956 0 0 0-.271 0h-4.918a1.067 1.067 0 0 0-.262 0 .813.813 0 0 0-.613.534.778.778 0 0 0 .158.796.805.805 0 0 0 .639.28h5.153a.804.804 0 0 0 .088-1.584l.026-.026Z"></path></svg>';

export class IconSocialBloggerCircleFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bloggerCircleFilledLarge', '', null, 'IconSocialBloggerCircleFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--bloggerCircleFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bloggerCircleFilledLarge', '', newVal, 'IconSocialBloggerCircleFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-blogger-circle-filled-large', IconSocialBloggerCircleFilledLarge);
