import {
    LitElement, css, PropertyValues,
} from 'lit';
import { property, state } from 'lit/decorators.js';

import { getSvgProps, RegularIconSize, LargeIconSize } from '@justeattakeaway/pie-icons-configs';

export abstract class PieIconComponent extends LitElement {
    static styles = css`
        :host svg {
            display: var(--icon-display-override, block);
        }
    `;

    @property({ type: String, reflect: true })
    public size!: RegularIconSize | LargeIconSize;

    @state()
    protected _svgWidth!: string | number;

    @state()
    protected _svgHeight!: string | number;

    protected abstract isLarge: boolean;
    protected abstract name: string;
    public abstract class: string;

    firstUpdated (): void {
        this.size = this.isLarge ? 32 : 'xs';
        this._svgWidth = this.isLarge ? 32 : 16;
        this._svgHeight = this.isLarge ? 32 : 16;
        this.updateIconSize();
    }

    willUpdate (changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('size')) {
            this.updateIconSize();
        }
    }

    updateIconSize (): void {
        const svgSize = getSvgProps(this.class, '', this.size, this.name);
        this._svgWidth = svgSize.width;
        this._svgHeight = svgSize.height;
    }
}
