
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--prepareLarge"><path d="M23.263 24.552a3.527 3.527 0 0 0 1.12-2.58c0-.42-.079-.902-.245-1.427a2.192 2.192 0 0 0-1.12-1.313 2.268 2.268 0 0 0-1.243-.218c.21-.499.7-.709.832-.753l-.272-.831-.262-.831a3.233 3.233 0 0 0-1.785 1.487 3.885 3.885 0 0 0-2.214-1.968c.56-.324 1.129-.665 1.715-1.05.656-.403 1.207-1.26.875-2.197-.175-.49-.849-2.213-1.286-3.334 2.45-1.26 3.841-1.872 5.084-2.406L23.587 5.6c-1.34.577-2.897 1.269-5.714 2.747-4.909 2.564-8.619 4.726-11.673 6.808l-.07.053c-1.286.944-1.82 1.688-1.724 2.432.132.91.91 1.409 1.61 1.496.202.044.928.158 2.065.131 0 .07-.017.14-.026.21-.105 1.715.534 3.448 1.733 4.743.105.114.219.219.332.324H4.625l.446 1.75H26.93l.446-1.742h-4.112Zm-14.77-7.07c-1.365.088-2.144-.06-2.162-.06l-.087-.018c.14-.158.402-.42.927-.805 2.818-1.925 6.213-3.92 10.64-6.248.447 1.129 1.042 2.66 1.208 3.071a.589.589 0 0 1-.166.175 27.665 27.665 0 0 1-4.095 2.258c-.044-.035-.096-.053-.131-.088l-.963-.796c-.971-.805-2.362-.822-3.307-.035A6.41 6.41 0 0 0 8.5 17.5l-.008-.017Zm4.97 5.417-.105 1.505a4.788 4.788 0 0 1-2.293-1.374c-.883-.945-1.347-2.205-1.269-3.448a4.704 4.704 0 0 1 .84-2.398c.237-.34.517-.655.84-.918a.782.782 0 0 1 .49-.175c.202 0 .412.07.578.21l.332.272.604.498c.35.315.779.551 1.225.691.009 0 .027.01.035.018h.035l.14.052c.49.15.823.595.823 1.112a.52.52 0 0 1-.228.428 4.577 4.577 0 0 0-2.038 3.518l-.01.009Zm5.145-3.649a2.15 2.15 0 0 0-1.111 1.313c-.158.516-.237.988-.237 1.4 0 .498.105.98.289 1.408a4.697 4.697 0 0 1-2.441 1.129l.105-1.479a2.853 2.853 0 0 1 1.269-2.187 2.252 2.252 0 0 0 1.006-1.881c0-.456-.105-.893-.289-1.278a2.144 2.144 0 0 1 1.627 1.383c.01.035.018.06.027.096-.079.026-.158.052-.228.096h-.017Zm2.213 4.532a1.8 1.8 0 0 1-1.04-.332 1.816 1.816 0 0 1-.78-1.488c0-.236.053-.542.158-.883a.489.489 0 0 1 .228-.271.443.443 0 0 1 .218-.053c.053 0 .105 0 .158.026.42.149.717.219.962.228h.079c.158-.026.42-.026 1.041-.254a.457.457 0 0 1 .377.026.497.497 0 0 1 .236.271c.105.35.166.657.166.902 0 1.006-.814 1.82-1.82 1.82l.018.008Z"></path></svg>';

export default class IconPrepareLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPrepareLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPrepareLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-prepare-large', IconPrepareLarge);
