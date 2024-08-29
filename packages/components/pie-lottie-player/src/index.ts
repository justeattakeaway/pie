import { LitElement, PropertyValues, html } from 'lit';
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
    @query('div')
    private hostElement!: HTMLDivElement;

    private animationInstance?: AnimationItem;

    private _autoPlay = defaultProps.autoPlay;
    private _loop = defaultProps.loop;
    private _speed = defaultProps.speed;
    private _direction = defaultProps.direction;
    private _animationSrc = '';
    private _animationData?:object;

    protected firstUpdated (_changedProperties: PropertyValues): void {
        this._loadAnimation();
    }

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

    @property({ type: Boolean, reflect: true })
    get autoPlay () {
        return this._autoPlay;
    }

    set autoPlay (value) {
        if (!this.animationInstance) return;
        this._autoPlay = value;
        this.animationInstance.autoplay = value;
    }

    @property({ type: Boolean, reflect: true })
    get loop () {
        return this._loop;
    }

    set loop (value) {
        if (!this.animationInstance) return;
        this._loop = value;
        this.animationInstance.loop = value;
    }

    @property({ type: Number, reflect: true })
    get speed () {
        return this._speed;
    }

    set speed (value) {
        if (!this.animationInstance) return;
        this._speed = value;
        this.animationInstance.setSpeed(value);
    }

    @property({ type: String, reflect: true })
    get direction ():AnimationDirection {
        return this._direction;
    }

    set direction (value) {
        if (!this.animationInstance) return;
        if (!value) return;

        this._direction = value;

        switch (this._direction) {
            case 'reverse':
                this.animationInstance.setDirection(-1);
                break;
            default:
                this.animationInstance.setDirection(1);
                break;
        }
    }

    public play (): void {
        if (!this.animationInstance) return;
        this.animationInstance.play();
    }

    public stop (): void {
        if (!this.animationInstance) return;
        this.animationInstance.stop();
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
