import type { DefineComponent } from "vue";
import type { PieCheckboxGroup, CustomEvent } from "./dist/index.js";

type PieCheckboxGroupProps = {
  /**  */
  name?: PieCheckboxGroup["name"];
  /**  */
  assistiveText?: PieCheckboxGroup["assistiveText"];
  /**  */
  isInline?: PieCheckboxGroup["isInline"];
  /**  */
  status?: PieCheckboxGroup["status"];
  /**  */
  disabled?: PieCheckboxGroup["disabled"];
  /**  */
  _slottedChildren?: PieCheckboxGroup["_slottedChildren"];
  /** triggered after the disabled state of the checkbox group changes. */
  "onpie-checkbox-group-disabled"?: (e: CustomEvent<CustomEvent>) => void;
  /** triggered after the state of the checkbox group changes to error. */
  "onpie-checkbox-group-error"?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **pie-checkbox-group-disabled** - triggered after the disabled state of the checkbox group changes.
   * - **pie-checkbox-group-error** - triggered after the state of the checkbox group changes to error.
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   * - **label** - The label slot
   */
  "pie-checkbox-group": DefineComponent<PieCheckboxGroupProps>;
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
