import type { DefineComponent } from "vue";
import type { PieButton } from "./dist/index.js";

type PieButtonProps = {
  /**  */
  tag?: PieButton["tag"];
  /**  */
  size?: PieButton["size"];
  /**  */
  type?: PieButton["type"];
  /**  */
  variant?: PieButton["variant"];
  /**  */
  iconPlacement?: PieButton["iconPlacement"];
  /**  */
  disabled?: PieButton["disabled"];
  /**  */
  isLoading?: PieButton["isLoading"];
  /**  */
  isFullWidth?: PieButton["isFullWidth"];
  /**  */
  isResponsive?: PieButton["isResponsive"];
  /**  */
  name?: PieButton["name"];
  /**  */
  value?: PieButton["value"];
  /**  */
  formaction?: PieButton["formaction"];
  /**  */
  formenctype?: PieButton["formenctype"];
  /**  */
  formmethod?: PieButton["formmethod"];
  /**  */
  formnovalidate?: PieButton["formnovalidate"];
  /**  */
  formtarget?: PieButton["formtarget"];
  /**  */
  responsiveSize?: PieButton["responsiveSize"];
  /**  */
  href?: PieButton["href"];
  /**  */
  rel?: PieButton["rel"];
  /**  */
  target?: PieButton["target"];
  /**  */
  download?: PieButton["download"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - **icon** - The icon slot
   * - _default_ - Default slot
   */
  "pie-button": DefineComponent<PieButtonProps>;
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
