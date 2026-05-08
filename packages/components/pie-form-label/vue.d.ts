import type { DefineComponent } from "vue";
import type { PieFormLabel } from "./dist/index.js";

type PieFormLabelProps = {
  /**  */
  for?: PieFormLabel["for"];
  /**  */
  optional?: PieFormLabel["optional"];
  /**  */
  trailing?: PieFormLabel["trailing"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-form-label": DefineComponent<PieFormLabelProps>;
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
