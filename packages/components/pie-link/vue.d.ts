import type { DefineComponent } from "vue";
import type { PieLink } from "./dist/index.js";

type PieLinkProps = {
  /**  */
  tag?: PieLink["tag"];
  /**  */
  variant?: PieLink["variant"];
  /**  */
  size?: PieLink["size"];
  /**  */
  underline?: PieLink["underline"];
  /**  */
  iconPlacement?: PieLink["iconPlacement"];
  /**  */
  href?: PieLink["href"];
  /**  */
  target?: PieLink["target"];
  /**  */
  rel?: PieLink["rel"];
  /**  */
  download?: PieLink["download"];
  /**  */
  isBold?: PieLink["isBold"];
  /**  */
  isStandalone?: PieLink["isStandalone"];
  /**  */
  hasVisited?: PieLink["hasVisited"];
  /**  */
  type?: PieLink["type"];
  /**  */
  aria?: PieLink["aria"];
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
  "pie-link": DefineComponent<PieLinkProps>;
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
