
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.scss?inline' {
    const content: Record<string, string>;
    export default content;
}

declare module 'lottie-web/build/player/lottie_light_canvas.min.js' {
    import { LottiePlayer } from 'lottie-web';

    const lottie: LottiePlayer;
    export default lottie;
}
