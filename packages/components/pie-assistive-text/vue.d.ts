import type { DefineComponent } from "vue";
import type { PieAssistiveText } from "./dist/index.js";

type PieAssistiveTextProps = {
  /**  */
  variant?: PieAssistiveText["variant"];
  /**  */
  isVisuallyHidden?: PieAssistiveText["isVisuallyHidden"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   */
  "pie-assistive-text": DefineComponent<PieAssistiveTextProps>;
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
