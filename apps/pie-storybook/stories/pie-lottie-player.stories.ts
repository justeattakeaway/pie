import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-lottie-player';
import '@justeattakeaway/pie-button';
import {
    type LottiePlayerProps as LottiePlayerBaseProps, type PieLottiePlayer, defaultProps, directions,
} from '@justeattakeaway/pie-lottie-player';

import { createStory } from '../utilities';

type LottiePlayerProps = Omit<LottiePlayerBaseProps, 'play' | 'stop'>
type LottiePlayerStoryMeta = Meta<LottiePlayerProps>;

const defaultArgs: LottiePlayerProps = { ...defaultProps };

const animationSrcOptions: string[] = [
    './static/animations/courier.json',
    './static/animations/order-confirmed.json',
    './static/animations/preparing.json',
];

const animationSrcLabels = animationSrcOptions.reduce<Record<string, string>>((acc, current) => {
    const match = current.match(/.*\/(.*).json/);
    acc[current] = match && match[1] ? match[1] : '';
    return acc;
}, {});

const lottiePlayerStoryMeta: LottiePlayerStoryMeta = {
    title: 'Components/Lottie Player',
    component: 'pie-lottie-player',
    argTypes: {
        animationSrc:  {
            description: 'Lottie animation JSON file URL or relative path.\n animationSrc and animationData are mutually exclusive.',
            control: {
                type: 'select',
                labels: animationSrcLabels,
            },
            options: [...animationSrcOptions, ''],
            defaultValue: {
                summary: defaultArgs.animationSrc,
            },
        },
        loopDisabled: {
            description: 'By the default animations loop, setting this prop as true will prevent such behaviour.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.loopDisabled,
            },
        },
        autoPlayDisabled: {
            description: 'By default animations start playing as soons as its data is available, setting this prop as true will prevent such behaviour.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.autoPlayDisabled,
            },
        },
        speed: {
            description: 'Determines the animation reproduction speed.\n1 is the regular speed, 2 is twice as fast.',
            control: {
                type: 'number',
                step: 0.25,
                min: 0.25,
            },
            defaultValue: {
                summary: defaultArgs.speed,
            },
        },
        direction: {
            description: 'Sets the animation reproduction direction',
            control: 'select',
            options: directions,
            defaultValue: {
                summary: defaultArgs.direction,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default lottiePlayerStoryMeta;

function handleStopAnimationClick () {
    const player:PieLottiePlayer|null = document.querySelector('pie-lottie-player');
    if (player) player.stop();
}

function handleStartAnimationClick () {
    const player:PieLottiePlayer|null = document.querySelector('pie-lottie-player');
    if (player) player.play();
}

const Template = ({
    animationSrc,
    loopDisabled,
    autoPlayDisabled,
    speed,
    direction,
}: LottiePlayerProps) => html`
    <div style="display: flex; justify-content: center;">
        <pie-button size="xsmall" @click=${handleStopAnimationClick}>Stop animation</pie-button>
        <pie-button size="xsmall" @click=${handleStartAnimationClick}>Start animation</pie-button>
    </div>
    <pie-lottie-player
        .animationSrc="${animationSrc === undefined ? animationSrcOptions[0] : animationSrc}"
        ?loopDisabled="${loopDisabled}"
        ?autoPlayDisabled="${autoPlayDisabled}"
        .speed="${speed}"
        .direction="${direction}"
    ></pie-lottie-player>
`;

export const Default = createStory<LottiePlayerProps>(Template, defaultArgs)();
