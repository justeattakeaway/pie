declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.scss?inline' {
    const content: Record<string, string>;
    export default content;
}

// This is a placeholder value that is swapped out
// with the component package.json version at build time by Vite.
declare const __PACKAGE_VERSION__: string;

declare module 'lottie-web/build/player/lottie_light_canvas.min.js' {
    import { type LottiePlayer } from 'lottie-web';

    const lottie: LottiePlayer;
    export default lottie;
}
