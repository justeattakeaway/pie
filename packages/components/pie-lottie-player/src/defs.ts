import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const directions = ['forward', 'reverse'] as const;
export type AnimationDirection = typeof directions[number];

export interface LottiePlayerProps {
    /**
     * Lottie animation JSON file URL or relative path
     * animationSrc and animationData are mutually exclusive
     */
    animationSrc?: string;

    /**
     * Object with Lottie animation data
     * animationSrc and animationData are mutually exclusive
     */
    animationData?: object;

    /**
     * Indicates whether the animation loops after reaching the end
     */
    loop?: boolean;

    /**
     * Indicates whether the animation starts as soon as it is ready to play
     * Changing the value while the animation is already playing will not change its state
     */
    autoPlay?: boolean;

    /**
     * Determines the animation reproduction speed
     * 1 is the regular speed, 2 is twice as fast
     */
    speed?:number;

    /**
     * Sets the animation reproduction direction
     */
    direction?:AnimationDirection;

    /**
     * Plays ther animation
     */
    play (): void;

    /**
     * Stops the animation
     */
    stop (): void;
}

export type DefaultProps = ComponentDefaultProps<LottiePlayerProps, keyof Omit<LottiePlayerProps, 'animationSrc' | 'animationData'| 'play' | 'stop'>>;

export const defaultProps: DefaultProps = {
    loop: true,
    autoPlay: true,
    speed: 1,
    direction: directions[0],
};
