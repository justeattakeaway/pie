import type { DefineComponent } from "vue";
import type { PieRadioGroup, CustomEvent } from "./dist/index.js";

type PieRadioGroupProps = {
  /**  */
  name?: PieRadioGroup["name"];
  /**  */
  value?: PieRadioGroup["value"];
  /**  */
  isInline?: PieRadioGroup["isInline"];
  /**  */
  disabled?: PieRadioGroup["disabled"];
  /**  */
  assistiveText?: PieRadioGroup["assistiveText"];
  /**  */
  status?: PieRadioGroup["status"];
  /**  */
  _slottedChildren?: PieRadioGroup["_slottedChildren"];
  /** when one of the radios state is changed. */
  onchange?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - when one of the radios state is changed.
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   * - **label** - The label slot
   */
  "pie-radio-group": DefineComponent<PieRadioGroupProps>;
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
