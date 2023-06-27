
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--youtubeCircleLarge"><path fill-rule="evenodd" d="M9.194 5.814a12.25 12.25 0 1 1 13.612 20.372A12.25 12.25 0 0 1 9.194 5.814Zm.972 18.916A10.5 10.5 0 1 0 21.834 7.27a10.5 10.5 0 0 0-11.666 17.46Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M21.47 11.3c.602.164 1.077.65 1.238 1.266.292 1.116.292 3.447.292 3.447s0 2.33-.293 3.447a1.774 1.774 0 0 1-1.237 1.267c-1.092.299-5.47.299-5.47.299s-4.378 0-5.47-.3a1.774 1.774 0 0 1-1.237-1.266C9 18.343 9 16.013 9 16.013s0-2.33.293-3.447a1.774 1.774 0 0 1 1.237-1.267C11.622 11 16 11 16 11s4.378 0 5.47.3Zm-3.242 5.071-3.66 2.116v-4.232l3.66 2.116Z" clip-rule="evenodd"></path></svg>';

export default class IconSocialYoutubeCircleLarge extends HTMLElement {
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

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        const defaultSize = getDefaultIconSize('IconSocialYoutubeCircleLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSocialYoutubeCircleLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-social-youtube-circle-large', IconSocialYoutubeCircleLarge);
