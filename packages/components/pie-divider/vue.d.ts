import type { DefineComponent } from "vue";
import type { PieDivider } from "./dist/index.js";

type PieDividerProps = {
  /**  */
  variant?: PieDivider["variant"];
  /**  */
  orientation?: PieDivider["orientation"];
  /**  */
  label?: PieDivider["label"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-divider": DefineComponent<PieDividerProps>;
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
