import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path fill-rule="evenodd" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.707 9.174a1.774 1.774 0 0 0-1.237-1.267c-1.092-.299-5.47-.299-5.47-.299s-4.378 0-5.47.3a1.774 1.774 0 0 0-1.237 1.266C9 14.04 9 16.37 9 16.37s0 2.33.293 3.448c.16.616.635 1.1 1.237 1.266 1.092.299 5.47.299 5.47.299s4.378 0 5.47-.3a1.774 1.774 0 0 0 1.237-1.265C23 18.701 23 16.37 23 16.37s0-2.33-.293-3.447Zm-8.138 5.563 3.659-2.116-3.66-2.116v4.232Z" clip-rule="evenodd"></path></svg>';

export class IconSocialYoutubeCircleFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircleFilledLarge', '', null, 'IconSocialYoutubeCircleFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--youtubeCircleFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircleFilledLarge', '', newVal, 'IconSocialYoutubeCircleFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--youtubeCircleFilledLarge', newVal);
    }
}

customElements.define('icon-social-youtube-circle-filled-large', IconSocialYoutubeCircleFilledLarge);
