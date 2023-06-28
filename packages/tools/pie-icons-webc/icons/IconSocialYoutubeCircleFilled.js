import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--youtubeCircleFilled"><g clip-path="url(#prefix__clip0_1611_662)"><path fill-rule="evenodd" d="M4.237 2.315A6.781 6.781 0 0 1 8 1.175 6.79 6.79 0 0 1 14.78 8 6.781 6.781 0 1 1 4.237 2.315Zm6.638 4.356a.76.76 0 0 0-.53-.543C9.875 6 8 6 8 6s-1.876 0-2.344.128a.76.76 0 0 0-.53.543C5 7.15 5 8.148 5 8.148s0 1 .125 1.478a.76.76 0 0 0 .53.543c.469.128 2.345.128 2.345.128s1.876 0 2.344-.128a.76.76 0 0 0 .53-.543C11 9.147 11 8.148 11 8.148s0-.998-.125-1.477ZM7.386 9.209l1.569-.907-1.569-.907V9.21Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_1611_662"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialYoutubeCircleFilled extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconSocialYoutubeCircleFilled');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSocialYoutubeCircleFilled');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-social-youtube-circle-filled', IconSocialYoutubeCircleFilled);
