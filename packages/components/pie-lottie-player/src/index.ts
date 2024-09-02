import {
    LitElement, PropertyValues, html, unsafeCSS,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import { LottiePlayer, AnimationItem } from 'lottie-web';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { LottiePlayerProps, defaultProps, AnimationDirection } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-lottie-player';

/**
 * @tagname pie-lottie-player
 */
export class PieLottiePlayer extends LitElement implements LottiePlayerProps {
    @query('div')
    private hostElement!: HTMLDivElement;

    private animationInstance?: AnimationItem;

    private _lottie?:LottiePlayer;
    private _disableAutoPlay = defaultProps.disableAutoPlay;
    private _disableLoop = defaultProps.disableLoop;
    private _speed = defaultProps.speed;
    private _direction = defaultProps.direction;
    private _animationSrc = '';
    private _animationData?:object;

    protected async firstUpdated (_changedProperties: PropertyValues): Promise<void> {
        // Check if the code is running in a browser environment
        if (this.canUseDOM()) {
            // TODO: Solve TS issue
            const asyncLottieModule = await import('lottie-web/build/player/esm/lottie_light_canvas.min.js'); // Dynamically import the 'lottie-web' library to avoid SSR issues
            this._lottie = asyncLottieModule.default;
            this._loadAnimation();
        }
    }

    disconnectedCallback () {
        super.disconnectedCallback();
        this._destroyAnimation();
    }

    private canUseDOM () {
        return typeof window !== 'undefined' && 'document' in window && 'createElement' in window.document;
    }

    private _loadAnimation (): void {
        if (!this.canUseDOM()) return;
        if (!this.hostElement) return;
        if (!this._lottie) return;

        this._destroyAnimation();

        if (!this.animationSrc && !this.animationData) return;

        try {
            this.animationInstance = this._lottie.loadAnimation({
                container: this.hostElement, // the dom element that will contain the animation
                renderer: 'canvas',
                loop: !this.disableLoop,
                autoplay: !this.disableAutoPlay,
                animationData: this.animationData,
                path: this.animationSrc,
            });
            this.animationInstance.setSpeed(this.speed);
            this._updateDirection();
        } catch (error:any) {
            console.error(`PieLottiePlayer: the animation couldn't be played. Error: "${error.message}"`);
        }
    }

    private _destroyAnimation (): void {
        if (!this.animationInstance) return;
        this.animationInstance.destroy();
    }

    // Getter and Setter for animationSrc
    @property({ type: String, reflect: true })
    get animationSrc () {
        return this._animationSrc;
    }

    set animationSrc (value) {
        this._animationSrc = value;
        // When animationSrc changes, reset animationData to undefined
        this._animationData = undefined;
        this._loadAnimation();
    }

    // Getter and Setter for animationData
    @property({ type: Object })
    get animationData () {
        return this._animationData;
    }

    set animationData (value) {
        this._animationData = value;
        // When animationData changes, reset animationSrc to an empty string
        this._animationSrc = '';
        this._loadAnimation();
    }

    @property({ type: Boolean })
    get disableAutoPlay () {
        return this._disableAutoPlay;
    }

    set disableAutoPlay (value) {
        this._disableAutoPlay = value;
        if (!this.animationInstance) return;

        this.animationInstance.autoplay = value;
    }

    @property({ type: Boolean })
    get disableLoop () {
        return this._disableLoop;
    }

    set disableLoop (value) {
        this._disableLoop = value;
        if (!this.animationInstance) return;

        this.animationInstance.loop = !value;

        // Ensure to resume playing if looping was disabled
        const shouldResumePlaying = this._disableLoop === false && this.animationInstance.isPaused && this.animationInstance.isLoaded;
        if (shouldResumePlaying) this.play();
    }

    @property({ type: Number, reflect: true })
    get speed () {
        return this._speed;
    }

    set speed (value) {
        this._speed = value;
        if (!this.animationInstance) return;

        this.animationInstance.setSpeed(value);
    }

    @property({ type: String, reflect: true })
    get direction ():AnimationDirection {
        return this._direction;
    }

    set direction (value) {
        if (!value) return;
        this._direction = value;

        if (!this.animationInstance) return;

        this._updateDirection();
    }

    private _updateDirection () {
        if (!this.animationInstance) return;

        switch (this._direction) {
            case 'reverse':
                this.animationInstance.setDirection(-1);
                break;
            default:
                this.animationInstance.setDirection(1);
                break;
        }
    }

    /**
     * Plays the animation
     */
    public play (): void {
        if (!this.animationInstance) return;
        // `goToAndPlay` is more useful than `play` in cases when looping is
        // disabled, as `play` will simply try to resume playing from the last
        // available frame and nothing will happen
        this.animationInstance.goToAndPlay(0, true);
    }

    /**
     * Stops the animation
     */
    public stop (): void {
        if (!this.animationInstance) return;
        this.animationInstance.stop();
    }

    render () {
        return html`<div data-test-id="pie-lottie-player"></div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(''); // Kept as empty to ensure it will be present during SSR testing
}

defineCustomElement(componentSelector, PieLottiePlayer);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieLottiePlayer;
    }
}
