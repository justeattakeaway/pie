import type { DefineComponent } from "vue";
import type { PieIconButton } from "./dist/index.js";

type PieIconButtonProps = {
  /**  */
  aria?: PieIconButton["aria"];
  /**  */
  size?: PieIconButton["size"];
  /**  */
  variant?: PieIconButton["variant"];
  /**  */
  disabled?: PieIconButton["disabled"];
  /**  */
  isLoading?: PieIconButton["isLoading"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-icon-button": DefineComponent<PieIconButtonProps>;
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
