import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
// @ts-expect-error - Type is defined below
import lottieLight from 'lottie-web/build/player/esm/lottie_light_canvas.min.js';
import Lottie, { AnimationItem } from 'lottie-web';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { LottiePlayerProps, defaultProps, AnimationDirection } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-lottie-player';

// Use type assertion to assign the LottiePlayer type to the lottie import
const lottie = lottieLight as typeof Lottie;

/**
 * @tagname pie-lottie-player
 */
export class PieLottiePlayer extends LitElement implements LottiePlayerProps {
    @property({ type: String })
    private _animationSrc?: string;

    @property({ type: Object })
    private _animationData?: object;

    @property({ type: Boolean })
    public loop = defaultProps.loop;

    @property({ type: Boolean })
    public autoPlay = defaultProps.autoPlay;

    @query('div')
    private hostElement!: HTMLDivElement;

    private animationInstance?: AnimationItem;

    disconnectedCallback () {
        super.disconnectedCallback();
        this._destroyAnimation();
    }

    private _loadAnimation (): void {
        if (!this.hostElement) return;

        this._destroyAnimation();

        if (!this.animationSrc && !this.animationData) return;

        try {
            this.animationInstance = lottie.loadAnimation({
                container: this.hostElement, // the dom element that will contain the animation
                renderer: 'canvas',
                loop: this.loop,
                autoplay: this.autoPlay,
                animationData: this.animationData,
                path: this.animationSrc,
            });
        } catch (error:any) {
            console.error(`The animation couldn't be played: ${error.message}`);
        }
    }

    private _destroyAnimation (): void {
        if (!this.animationInstance) return;
        this.animationInstance.destroy();
    }

    get animationSrc () {
        return this._animationSrc;
    }

    set animationSrc (newValue) {
        this._animationSrc = newValue;
        this._animationData = undefined;

        this._loadAnimation();
    }

    get animationData () {
        return this._animationData;
    }

    set animationData (newValue) {
        this._animationData = newValue;
        this._animationSrc = undefined;

        this._loadAnimation();
    }

    public play (): void {
        if (!this.animationInstance) return;
        this.animationInstance.play();
    }

    public stop (): void {
        if (!this.animationInstance) return;
        this.animationInstance.stop();
    }

    public setSpeed (speed:number): void {
        if (!this.animationInstance) return;
        this.animationInstance.setSpeed(speed);
    }

    public setDirection (direction:AnimationDirection): void {
        if (!this.animationInstance) return;
        if (!direction) return;

        switch (direction) {
            case 'reverse':
                this.animationInstance.setDirection(-1);
                break;
            default:
                this.animationInstance.setDirection(1);
                break;
        }
    }

    render () {
        return html`<div data-test-id="pie-lottie-player"></div>`;
    }
}

defineCustomElement(componentSelector, PieLottiePlayer);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieLottiePlayer;
    }
}
