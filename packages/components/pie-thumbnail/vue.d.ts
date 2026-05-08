import type { DefineComponent } from "vue";
import type { PieThumbnail } from "./dist/index.js";

type PieThumbnailProps = {
  /**  */
  variant?: PieThumbnail["variant"];
  /**  */
  size?: PieThumbnail["size"];
  /**  */
  aspectRatio?: PieThumbnail["aspectRatio"];
  /**  */
  src?: PieThumbnail["src"];
  /**  */
  alt?: PieThumbnail["alt"];
  /**  */
  disabled?: PieThumbnail["disabled"];
  /**  */
  hasPadding?: PieThumbnail["hasPadding"];
  /**  */
  hideDefaultPlaceholder?: PieThumbnail["hideDefaultPlaceholder"];
  /**  */
  backgroundColor?: PieThumbnail["backgroundColor"];
  /**  */
  placeholder?: PieThumbnail["placeholder"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-thumbnail": DefineComponent<PieThumbnailProps>;
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
