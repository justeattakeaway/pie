import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--androidCircleFilled"><g clip-path="url(#prefix__clip0_5394_3957)"><path d="M7.439 5.533c0 .12-.099.223-.215.223a.22.22 0 0 1-.218-.219.22.22 0 0 1 .214-.223.22.22 0 0 1 .219.219Z"></path><path d="M9.059 5.533c0 .12-.099.223-.215.223a.22.22 0 0 1-.218-.219.22.22 0 0 1 .214-.223.22.22 0 0 1 .219.219Z"></path><path fill-rule="evenodd" d="M4.237 2.315A6.781 6.781 0 0 1 8 1.175 6.79 6.79 0 0 1 14.78 8 6.781 6.781 0 1 1 4.237 2.315Zm2.4 2.83c.298-.28.7-.469 1.149-.514h.42a1.96 1.96 0 0 1 1.155.518l.345-.625s.038-.031.06-.018c.021.014.03.04.017.063l-.357.645c.282.295.454.679.46 1.1h-3.78c.006-.422.18-.808.465-1.105l-.354-.64s-.004-.05.017-.063c.022-.013.047-.004.06.018l.343.62Zm.836 4.797h1.054v1.12a.43.43 0 0 0 .42.438.43.43 0 0 0 .42-.437v-1.12h.022c.287 0 .518-.246.518-.554V6.5h-3.81V9.39c0 .303.232.553.519.553h.017v1.12a.43.43 0 0 0 .42.438.43.43 0 0 0 .42-.437v-1.12ZM5.84 7.19a.43.43 0 0 0-.42-.438.43.43 0 0 0-.42.438v1.874a.43.43 0 0 0 .42.438.43.43 0 0 0 .42-.438V7.19Zm4.74-.438a.43.43 0 0 1 .42.438v1.874a.43.43 0 0 1-.42.438.43.43 0 0 1-.42-.438V7.19a.43.43 0 0 1 .42-.438Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_5394_3957"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialAndroidCircleFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--androidCircleFilled', '', null, 'IconSocialAndroidCircleFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--androidCircleFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--androidCircleFilled', '', newVal, 'IconSocialAndroidCircleFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-android-circle-filled', IconSocialAndroidCircleFilled);
