import type { DefineComponent } from "vue";
import type { PieLottiePlayer } from "./dist/index.js";

type PieLottiePlayerProps = {
  /**  */
  animationSrc?: PieLottiePlayer["animationSrc"];
  /**  */
  animationData?: PieLottiePlayer["animationData"];
  /**  */
  autoPlayDisabled?: PieLottiePlayer["autoPlayDisabled"];
  /**  */
  loopDisabled?: PieLottiePlayer["loopDisabled"];
  /**  */
  speed?: PieLottiePlayer["speed"];
  /**  */
  direction?: PieLottiePlayer["direction"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Methods:**
   *  - **play(): _void_** - Plays the animation from the beginning
   * - **stop(): _void_** - Stops the animation
   */
  "pie-lottie-player": DefineComponent<PieLottiePlayerProps>;
};

declare module "vue" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalComponents extends CustomElements {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends CustomElements {}
  }
}
