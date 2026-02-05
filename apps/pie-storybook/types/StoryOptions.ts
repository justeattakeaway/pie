type BackgroundColor = 'light (container-default)' |
    'dark (container-dark)' |
    'background-subtle' |
    'background-dark' |
    'container-inverse' |
    'brand orange' |
    'saddlebrown' |
    'aquamarine';

export type BackgroundValue = {
    name: BackgroundColor,
    value: string,
};

export type StoryBackgrounds = {
    default: BackgroundColor,
    values: Array<BackgroundValue>,
};

type StorybookControls = {
    exclude?: string[],
    include?: string[],
    disable?: boolean;
}
export interface StoryOptions {
    bgColor?: BackgroundColor;
    controls?: StorybookControls
    layout?: 'centered' | 'fullscreen' | 'padded';
    argTypes?: Record<string, unknown>;
}
