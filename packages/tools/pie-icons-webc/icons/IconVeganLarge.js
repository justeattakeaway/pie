import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--veganLarge"><path d="m27.944 4.004-.21-.875-.875.236c-.359.105-9.109 2.573-11.603 6.764a6.2 6.2 0 0 0-.28.534C12.16 7.372 5.167 5.604 4.853 5.5l-.875-.21-.228.91c-.07.341-1.75 8.365.604 12.11a6.843 6.843 0 0 0 5.783 3.203c.367-.005.733-.04 1.094-.106l2.87 7.15h2.625l3.054-7.613c.485.11.981.17 1.479.175a7.465 7.465 0 0 0 6.405-3.701c2.458-4.2.367-13.038.28-13.414ZM5.876 17.383c-1.435-2.258-.98-7.298-.551-9.914 2.546.752 7.245 2.52 8.689 4.821.105.166.198.338.28.516a7.453 7.453 0 0 0 .14 3.01c.052.175.105.359.166.534a4.708 4.708 0 0 1-1.986 2.695l-1.637-4.139H8.624l1.942 4.83a5.049 5.049 0 0 1-4.69-2.354Zm9.625 8.88-2.196-5.582.263-.14a6.405 6.405 0 0 0 2.126-2.205 7 7 0 0 0 2.039 1.82l.148.07-2.38 6.038Zm10.64-9.738a5.68 5.68 0 0 1-5.722 2.774l1.75-4.375h-2.232l-1.443 3.701a5.25 5.25 0 0 1-2.363-3.203 5.687 5.687 0 0 1 .63-4.375c1.707-2.922 7.455-5.004 9.678-5.722.569 2.87 1.268 8.54-.298 11.2Z"></path></svg>';

export class IconVeganLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--veganLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--veganLarge', '', newVal, 'IconVeganLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-vegan-large', IconVeganLarge);
