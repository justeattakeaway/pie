import {
    html, isServer, unsafeCSS,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, query } from 'lit/decorators.js';
import { type LottiePlayer, type AnimationItem } from 'lottie-web';

import { safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { type LottiePlayerProps, defaultProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-lottie-player';

/**
 * @tagname pie-lottie-player
 */
@safeCustomElement('pie-lottie-player')
export class PieLottiePlayer extends PieElement implements LottiePlayerProps {
    @query('div')
    private _hostElement!: HTMLDivElement;

    private _lottie?: LottiePlayer;
    private _animationInstance?: AnimationItem;

    private _animationSrc = '';
    private _animationData?: object;
    private _autoPlayDisabled = defaultProps.autoPlayDisabled;
    private _loopDisabled = defaultProps.loopDisabled;
    private _speed = defaultProps.speed;
    private _direction = defaultProps.direction;

    protected async firstUpdated (): Promise<void> {
        // Dynamically import the 'lottie-web' library to avoid SSR issues
        const lottieModule = await import('lottie-web/build/player/lottie_light_canvas.min.js');

        // Added so Nuxt apps can properly have access to "default" without crashing
        if (lottieModule && lottieModule.default) {
            this._lottie = lottieModule.default;
            this._loadAnimation();
        }
    }

    disconnectedCallback () {
        super.disconnectedCallback();
        this._destroyAnimation();
    }

    private _loadAnimation (): void {
        if (isServer) return;
        if (!this._hostElement) return;
        if (!this._lottie) return;

        this._destroyAnimation();

        if (!this.animationSrc && !this.animationData) return;

        // If the system has "prefers-reduced-motion" set, it overrides "autoPlayDisabled"
        const prefersReducedMotion:boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const autoplay = prefersReducedMotion === true ? !prefersReducedMotion : !this.autoPlayDisabled;

        try {
            this._animationInstance = this._lottie.loadAnimation({
                container: this._hostElement, // the dom element that will contain the animation
                renderer: 'canvas',
                loop: !this.loopDisabled,
                animationData: this.animationData,
                path: this.animationSrc,
                autoplay,
            });
            this._animationInstance.setSpeed(this.speed);
            this._updateDirection();
        } catch (_error:unknown) {
            const error = _error as Error;
            const errorMessage = error && error.message && `Error: "${error.message}"`;
            console.error(`PieLottiePlayer: the animation couldn't be played. ${errorMessage}`);
        }
    }

    private _destroyAnimation (): void {
        if (!this._animationInstance) return;
        this._animationInstance.destroy();
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
    get autoPlayDisabled () {
        return this._autoPlayDisabled;
    }

    set autoPlayDisabled (value) {
        this._autoPlayDisabled = value;
        if (!this._animationInstance) return;

        this._animationInstance.autoplay = !value;
    }

    @property({ type: Boolean })
    get loopDisabled () {
        return this._loopDisabled;
    }

    set loopDisabled (value) {
        this._loopDisabled = value;
        if (!this._animationInstance) return;

        this._animationInstance.loop = !value;

        // Ensure to resume playing if looping was disabled
        const shouldResumePlaying = this._loopDisabled === false && this._animationInstance.isPaused && this._animationInstance.isLoaded;
        if (shouldResumePlaying) this.play();
    }

    @property({ type: Number, reflect: true })
    get speed () {
        return this._speed;
    }

    set speed (value) {
        this._speed = value;
        if (!this._animationInstance) return;

        this._animationInstance.setSpeed(value);
    }

    @property({ type: String, reflect: true })
    get direction (): LottiePlayerProps['direction'] {
        return this._direction;
    }

    set direction (value) {
        if (!value) return;
        this._direction = value;

        this._updateDirection();
    }

    private _updateDirection () {
        if (!this._animationInstance) return;

        switch (this._direction) {
            case 'reverse':
                this._animationInstance.setDirection(-1);
                break;
            default:
                this._animationInstance.setDirection(1);
                break;
        }
    }

    /**
     * Plays the animation from the beginning
     */
    public play (): void {
        if (!this._animationInstance) return;
        // `goToAndPlay` is more useful than `play` in cases when looping is
        // disabled, as `play` will simply try to resume playing from the last
        // available frame and nothing will happen
        this._animationInstance.goToAndPlay(0, true);
    }

    /**
     * Stops the animation
     */
    public stop (): void {
        if (!this._animationInstance) return;
        this._animationInstance.stop();
    }

    render () {
        return html`<div aria-hidden="true" data-test-id="pie-lottie-player"></div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(''); // Kept as empty to ensure it will be present during SSR testing
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieLottiePlayer;
    }
}
