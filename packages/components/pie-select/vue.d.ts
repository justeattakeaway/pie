import type { DefineComponent } from "vue";
import type { PieSelect, CustomEvent } from "./dist/index.js";

type PieSelectProps = {
  /**  */
  size?: PieSelect["size"];
  /**  */
  disabled?: PieSelect["disabled"];
  /**  */
  status?: PieSelect["status"];
  /**  */
  assistiveText?: PieSelect["assistiveText"];
  /**  */
  name?: PieSelect["name"];
  /**  */
  options?: PieSelect["options"];
  /**  */
  value?: PieSelect["value"];
  /**  */
  focusTarget?: PieSelect["focusTarget"];
  /** (Read-only) returns a ValidityState with the validity states that this element is in.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity */
  validity?: PieSelect["validity"];
  /** when the selected option is changed. */
  onchange?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - when the selected option is changed.
   *
   * ### **Methods:**
   *  - **formDisabledCallback(disabled: _boolean_): _void_** - Called after the disabled state of the element changes,
   * either because the disabled attribute of this element was added or removed;
   * or because the disabled state changed on a <fieldset> that's an ancestor of this element.
   * - **formResetCallback(): _void_** - Called when the form that owns this component is reset.
   * Resets the value to the default select value.
   */
  "pie-select": DefineComponent<PieSelectProps>;
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
