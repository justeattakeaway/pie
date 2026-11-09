type BackgroundColor = 'light (container-default)' |
    'dark (container-dark)' |
    'background-subtle' |
    'background-dark' |
    'container-inverse' |
    'grey-80%-L' |
    'brand orange' |
    'saddlebrown' |
    'aquamarine';

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
