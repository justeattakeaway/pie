import type { DefineComponent } from "vue";
import type { PieRadio, InputEvent, CustomEvent } from "./dist/index.js";

type PieRadioProps = {
  /**  */
  checked?: PieRadio["checked"];
  /**  */
  defaultChecked?: PieRadio["defaultChecked"];
  /**  */
  disabled?: PieRadio["disabled"];
  /**  */
  name?: PieRadio["name"];
  /**  */
  required?: PieRadio["required"];
  /**  */
  value?: PieRadio["value"];
  /**  */
  status?: PieRadio["status"];
  /** (Read-only) returns a ValidityState with the validity states that this element is in.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity */
  validity?: PieRadio["validity"];
  /** Should fire whenever a user toggles the radio. */
  oninput?: (e: CustomEvent<InputEvent>) => void;
  /** Fires when the radio is checked (but not when unchecked). */
  onchange?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **input** - Should fire whenever a user toggles the radio.
   * - **change** - Fires when the radio is checked (but not when unchecked).
   *
   * ### **Methods:**
   *  - **formResetCallback()** - Called when the form that contains this component is reset.
   * If the current checked state is different to the default checked state,
   * the checked state is reset to the default checked state and a `change` event is emitted.
   */
  "pie-radio": DefineComponent<PieRadioProps>;
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
