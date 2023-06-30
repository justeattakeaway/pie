import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><g clip-path="url(#prefix__clip0_1595_1533)"><path d="M8.14 1.411A6.615 6.615 0 1 0 14.755 8 6.624 6.624 0 0 0 8.14 1.411Zm1.942 4.165h-.577a.656.656 0 0 0-.735.718v.831h1.26l-.201 1.313h-1.06v3.167a3.88 3.88 0 0 1-.708.061 3.743 3.743 0 0 1-.709-.061v-3.15H6.197v-1.33h1.155v-.98a1.601 1.601 0 0 1 1.75-1.75c.34.005.68.034 1.015.088l-.035 1.093Z"></path></g><defs><clipPath id="prefix__clip0_1595_1533"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialFacebookCircleFilled extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircleFilled', '', null, 'IconSocialFacebookCircleFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--facebookCircleFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--facebookCircleFilled', '', newVal, 'IconSocialFacebookCircleFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--facebookCircleFilled', newVal);
    }
}

customElements.define('icon-social-facebook-circle-filled', IconSocialFacebookCircleFilled);
