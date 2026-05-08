import type { DefineComponent } from "vue";
import type { PieAvatar } from "./dist/index.js";

type PieAvatarProps = {
  /**  */
  tag?: PieAvatar["tag"];
  /**  */
  label?: PieAvatar["label"];
  /**  */
  src?: PieAvatar["src"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-avatar": DefineComponent<PieAvatarProps>;
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
