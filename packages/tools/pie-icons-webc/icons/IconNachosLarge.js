
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--nachosLarge"><path d="M18.188 9a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75Zm-.875-1.75a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Zm3.5.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Zm-6.8 1.47a41.126 41.126 0 0 1-.323-5.512c.018-.333.162-.646.402-.875a1.435 1.435 0 0 1 1.033-.412c1.98.049 3.946.325 5.863.823 1.832.485 3.596 1.2 5.25 2.126a1.198 1.198 0 0 1 .603.875 1.296 1.296 0 0 1-.402 1.076 60.339 60.339 0 0 1-4.822 4.113 60.719 60.719 0 0 1-4.725 3.29 1.41 1.41 0 0 1-.735.219 1.313 1.313 0 0 1-.48-.097 1.18 1.18 0 0 1-.718-.805 40.53 40.53 0 0 1-.945-4.821Zm1.427-5.04c.005 1.612.107 3.222.306 4.821.17 1.318.406 2.627.709 3.92a52.45 52.45 0 0 0 4.069-2.87 61.767 61.767 0 0 0 4.174-3.5 21.042 21.042 0 0 0-4.2-1.601 24 24 0 0 0-5.058-.77ZM29.125 23.28l-1.137 3.264a3.763 3.763 0 0 1-3.58 2.581H7.592a3.762 3.762 0 0 1-3.579-2.581L2.92 23.28a.875.875 0 0 1 .122-.788.875.875 0 0 1 .709-.367h2.24a43.578 43.578 0 0 1 1.697-4.427 1.4 1.4 0 0 1 1.96-.648 48.003 48.003 0 0 1 4.55 2.8 36.939 36.939 0 0 1 3.5-2.765 1.286 1.286 0 0 1 1.75.367c.175.263.333.525.5.788a44.762 44.762 0 0 1 4.287-.77 1.32 1.32 0 0 1 1.041.297 1.365 1.365 0 0 1 .499.998c.061 1.111.061 2.24 0 3.36h2.476a.876.876 0 0 1 .709.367.875.875 0 0 1 .166.788ZM20.9 19.85c.358.708.676 1.436.954 2.179v.096h2.231v-2.861a38.866 38.866 0 0 0-3.229.586h.044Zm-5.775 1.505c-.289.262-.543.516-.796.77h5.635a20.785 20.785 0 0 0-1.698-3.308 35.634 35.634 0 0 0-3.141 2.538Zm-7.289.77h4.043c.315-.341.647-.691 1.006-1.041-1.225-.875-2.459-1.61-3.754-2.328a39.289 39.289 0 0 0-1.295 3.369Zm19.198 1.75H4.966l.7 2.117a2.039 2.039 0 0 0 1.925 1.383H24.41a2.039 2.039 0 0 0 1.925-1.383l.7-2.117Z"></path></svg>;';

export class IconNachosLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconNachosLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconNachosLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-nachos-large', IconNachosLarge);
