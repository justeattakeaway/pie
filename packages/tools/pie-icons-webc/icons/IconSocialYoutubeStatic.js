import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--youtubeStatic"><path fill="red" d="M13.95 4.985a1.567 1.567 0 0 0-1.093-1.118c-.964-.264-4.831-.264-4.831-.264s-3.867 0-4.831.264a1.567 1.567 0 0 0-1.093 1.118c-.259.987-.259 3.045-.259 3.045s0 2.058.259 3.045c.142.544.56.973 1.093 1.119.964.264 4.83.264 4.83.264s3.867 0 4.832-.264a1.567 1.567 0 0 0 1.093-1.119c.258-.986.258-3.045.258-3.045s0-2.058-.258-3.045Z"></path><path fill="#fff" d="M6.761 9.899 9.993 8.03 6.761 6.161V9.9Z"></path></svg>';

export class IconSocialYoutubeStatic extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeStatic', '', null, 'IconSocialYoutubeStatic');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--youtubeStatic');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeStatic', '', newVal, 'IconSocialYoutubeStatic');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-youtube-static', IconSocialYoutubeStatic);
