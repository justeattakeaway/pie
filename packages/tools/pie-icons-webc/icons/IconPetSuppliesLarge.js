
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--petSuppliesLarge"><path d="M11.713 16.49c0 .525-.35.954-.78.954-.428 0-.778-.429-.778-.954 0-.525.35-.954.779-.954.429 0 .779.429.779.954Z"></path><path d="M14.171 19.351v.027l-.008.008.011.036c.008.02.015.038.015.06.052.15.087.307.087.482a1.533 1.533 0 0 1-2.389 1.269 1.533 1.533 0 0 1-2.389-1.269c0-.175.036-.333.088-.49l.027-.088.017-.035c.271-.735 1.181-1.277 2.266-1.277s1.995.542 2.275 1.277Z"></path><path d="M9.936 17.872c0-.524-.35-.953-.779-.953-.428 0-.778.428-.778.953 0 .526.35.954.778.954.43 0 .78-.428.78-.954Z"></path><path d="M13.699 16.49c0 .525-.35.954-.779.954-.429 0-.779-.429-.779-.954 0-.525.35-.954.78-.954.428 0 .778.429.778.954Z"></path><path d="M14.696 16.91c-.428 0-.778.429-.778.954 0 .525.35.953.778.953.429 0 .779-.428.779-.953 0-.525-.35-.954-.779-.954Z"></path><path fill-rule="evenodd" d="m23.271 17.829-.315.332v.009c2.442.105 4.402 2.039 4.402 4.585a4.617 4.617 0 0 1-4.612 4.611c-1.426 0-2.677-.656-3.526-1.671v1.671H4.634V10.488a2.633 2.633 0 0 1 2.625-2.626h9.354a2.633 2.633 0 0 1 2.625 2.626v4.007l.42-.367c.262-.272.227-.744.174-.998a2.577 2.577 0 0 1 .71-2.328 2.588 2.588 0 0 1 3.665 0c.464.473.71 1.077.744 1.69a2.57 2.57 0 0 1 1.689.743 2.588 2.588 0 0 1 0 3.666 2.6 2.6 0 0 1-2.328.709c-.262-.052-.735-.087-1.04.219Zm-1.732-5.04c.201 1.015-.062 1.969-.7 2.607v.018l-1.61 1.409v2.773l2.791-2.975c.656-.665 1.61-.918 2.625-.726.28.053.56-.035.761-.236a.845.845 0 0 0 0-1.199.845.845 0 0 0-1.198 0 .871.871 0 1 1-1.234-1.234.845.845 0 0 0 0-1.199.845.845 0 0 0-1.199 0 .847.847 0 0 0-.236.762Zm-4.944-3.185H7.259a.878.878 0 0 0-.875.875v.761H17.47v-.761a.878.878 0 0 0-.875-.875ZM6.384 12.999v12.617H17.47V13H6.384Zm16.362 6.886a2.868 2.868 0 0 0-2.861 2.861h-.009c0 1.05.578 1.96 1.418 2.459.113-1.032.665-2.065 1.549-2.826.7-.604 1.522-.98 2.345-1.094a2.849 2.849 0 0 0-2.442-1.4Zm.271 5.661v.035l-.008.009a2.839 2.839 0 0 0 2.555-2.573c-.525.035-1.103.272-1.584.692-.586.507-.963 1.216-.963 1.837Z" clip-rule="evenodd"></path></svg>;';

export class IconPetSuppliesLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPetSuppliesLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPetSuppliesLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-pet-supplies-large', IconPetSuppliesLarge);
