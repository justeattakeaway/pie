type BackgroundColor = 'light (container-default)' |
    'dark (container-dark)' |
    'background-subtle' |
    'brand orange' |
    'saddlebrown' |
    'aquamarine';

type BackgroundValue = {
    name: BackgroundColor,
    value: string,
};

export type StoryBackgrounds = {
    default: BackgroundColor,
    values: Array<BackgroundValue>,
};

export interface StoryOptions {
    bgColor?: BackgroundColor;
}
