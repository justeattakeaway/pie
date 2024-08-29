import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const directions = ['forward', 'reverse'] as const;
export type AnimationDirection = typeof directions[number];

export interface LottiePlayerProps {
    /**
     * Lottie animation JSON file URL or relative path
     * Define either animationSrc or animationData
     */
    animationSrc?: string;

    /**
     * Object with Lottie animation data
     * Define either animationSrc or animationData
     */
    animationData?: object;

    /**
     * Determines if the animation loops after reaching the end
     */
    loop?: boolean;

    /**
     * Determines if the animation starts as soon as it is ready to play
     */
    autoPlay?: boolean;

    /**
     * Determines the animation reproduction speed
     * @param speed {number} 1 is the regular speed, 2 is twice as fast
     */
    speed?:number;

    /**
     * Sets the animation reproduction direction
     * @param direction {AnimationDirection}
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
