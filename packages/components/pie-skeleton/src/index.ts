
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './skeleton.scss?inline';
import { type SkeletonProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-skeleton';

/**
 * @tagname pie-skeleton
 */
@safeCustomElement('pie-skeleton')
export class PieSkeleton extends PieElement implements SkeletonProps {
    render () {
        return html`<h1 data-test-id="pie-skeleton">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSkeleton;
    }
}
