
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--calendarEdit"><path d="m13.136 6.189.77.77v-3.99h-2.625V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h2.844l.008-.061.14-1.251h-1.68V4.28H4.72v1.094H6.03V4.281H9.97v1.094h1.312V4.281h1.313v1.392"></path><path d="m13.119 8-.875-.875a1.077 1.077 0 0 0-1.505 0l-3.92 3.867c-.17.18-.278.41-.306.657l-.263 2.336 2.336-.262c.247-.025.479-.133.656-.307l3.877-3.885a1.06 1.06 0 0 0 0-1.505V8Zm-4.752 4.375-.56-.56 2.573-2.572.56.56-2.572 2.572Z"></path></svg>;';

export class IconCalendarEdit extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconCalendarEdit');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconCalendarEdit');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-calendar-edit', IconCalendarEdit);
