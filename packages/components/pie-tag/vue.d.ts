import type { DefineComponent } from "vue";
import type { PieTag } from "./dist/index.js";

type PieTagProps = {
  /**  */
  variant?: PieTag["variant"];
  /**  */
  size?: PieTag["size"];
  /**  */
  isStrong?: PieTag["isStrong"];
  /**  */
  isDimmed?: PieTag["isDimmed"];
  /**  */
  isIconOnly?: PieTag["isIconOnly"];
  /**  */
  hasLeadingIcon?: PieTag["hasLeadingIcon"];
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
   *
   * ### **CSS Parts:**
   *  - **body** - The main container of the tag.
   * - **icon** - The container for the icon slot.
   */
  "pie-tag": DefineComponent<PieTagProps>;
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
