import type { DefineComponent } from "vue";
import type { PieSpinner } from "./dist/index.js";

type PieSpinnerProps = {
  /**  */
  aria?: PieSpinner["aria"];
  /**  */
  size?: PieSpinner["size"];
  /**  */
  variant?: PieSpinner["variant"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-spinner": DefineComponent<PieSpinnerProps>;
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
