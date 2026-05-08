import type { DefineComponent } from "vue";
import type { PieCheckbox, CustomEvent } from "./dist/index.js";

type PieCheckboxProps = {
  /**  */
  value?: PieCheckbox["value"];
  /**  */
  name?: PieCheckbox["name"];
  /**  */
  checked?: PieCheckbox["checked"];
  /**  */
  defaultChecked?: PieCheckbox["defaultChecked"];
  /**  */
  disabled?: PieCheckbox["disabled"];
  /**  */
  required?: PieCheckbox["required"];
  /**  */
  indeterminate?: PieCheckbox["indeterminate"];
  /**  */
  assistiveText?: PieCheckbox["assistiveText"];
  /**  */
  status?: PieCheckbox["status"];
  /** (Read-only) returns a ValidityState with the validity states that this element is in.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity */
  validity?: PieCheckbox["validity"];
  /** when checked state is changed. */
  onchange?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - when checked state is changed.
   *
   * ### **Methods:**
   *  - **formDisabledCallback(disabled: _boolean_): _void_** - Called after the disabled state of the element changes,
   * either because the disabled attribute of this element was added or removed;
   * or because the disabled state changed on a <fieldset> that's an ancestor of this element.
   * - **formResetCallback(): _void_** - Called when the form that contains this component is reset.
   * If the current checked state is different to the default checked state,
   * the checked state is reset to the default checked state and a `change` event is emitted.
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   */
  "pie-checkbox": DefineComponent<PieCheckboxProps>;
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
