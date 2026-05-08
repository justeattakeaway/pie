import type { DefineComponent } from "vue";
import type { PieTabs } from "./dist/index.js";

type PieTabsProps = {};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-tabs": DefineComponent<PieTabsProps>;
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
