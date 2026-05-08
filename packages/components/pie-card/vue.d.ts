import type { DefineComponent } from "vue";
import type { PieCard } from "./dist/index.js";

type PieCardProps = {
  /**  */
  tag?: PieCard["tag"];
  /**  */
  variant?: PieCard["variant"];
  /**  */
  href?: PieCard["href"];
  /**  */
  target?: PieCard["target"];
  /**  */
  rel?: PieCard["rel"];
  /**  */
  disabled?: PieCard["disabled"];
  /**  */
  aria?: PieCard["aria"];
  /**  */
  isDraggable?: PieCard["isDraggable"];
  /**  */
  padding?: PieCard["padding"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-card": DefineComponent<PieCardProps>;
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
