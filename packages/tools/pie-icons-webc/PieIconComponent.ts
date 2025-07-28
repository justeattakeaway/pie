import {
    LitElement, css, type PropertyValues, type TemplateResult,
} from 'lit';
import { property, state } from 'lit/decorators.js';

import {
    getSvgProps, type RegularIconSize, type LargeIconSize,
} from '@justeattakeaway/pie-icons-configs';

export abstract class PieIconComponent extends LitElement {
    // The following styles make sure that the icon will be sized correctly.
    // "--icon-size-override" css var can be used in parent components to make sure the icon
    // stays the correct size for cases where the icon is added by consumers via a slot,
    // for example in Button, IconButton, Chip and Tag.
    // Might be changed later to assigning a size prop to an icon slot
    // (POC: https://github.com/justeattakeaway/pie/pull/1128)
    static styles = css`
        :host {
            display: inline-block;
            /* Inline SVGs can cause an additional ~4px height in their containers (such as this host).*/
            line-height: 0;
        }

        :host svg {
            /* When the --icon-size-override CSS variable does not exist, the height and width in the HTML attributes will be used. */
            width: var(--icon-size-override);
            height: var(--icon-size-override);
        }
    `;

    @property({ type: String, reflect: true })
    public size!: RegularIconSize | LargeIconSize;

    @state()
    protected _svgWidth!: string | number;

    @state()
    protected _svgHeight!: string | number;

    protected abstract name: string;

    public abstract class: string;

    /**
     * These are the base classes and come from the SVG file during the build phase
     */
    protected defaultClasses = '';

    firstUpdated (): void {
        this.updateIconSize();
    }

    willUpdate (changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('size')) {
            this.updateIconSize();
        }
    }

    updateIconSize (): void {
        const svgSize = getSvgProps(this.className, '', this.size, this.name);
        this._svgWidth = svgSize.width;
        this._svgHeight = svgSize.height;
    }

    attributeChangedCallback (name: string, oldVal: string | null, newVal: string | null) {
        if (name === 'class' && newVal !== null) {
            const incomingClasses = newVal.trim().split(' ').filter((cls) => !this.defaultClasses.split(' ').includes(cls));
            this.class = [this.defaultClasses, ...incomingClasses].join(' ');
        } else {
            super.attributeChangedCallback(name, oldVal, newVal);
        }
    }

    abstract render(): TemplateResult;
}
