import type { DefineComponent } from "vue";
import type { PieTextarea, InputEvent, CustomEvent } from "./dist/index.js";

type PieTextareaProps = {
  /**  */
  value?: PieTextarea["value"];
  /**  */
  defaultValue?: PieTextarea["defaultValue"];
  /**  */
  disabled?: PieTextarea["disabled"];
  /**  */
  size?: PieTextarea["size"];
  /**  */
  resize?: PieTextarea["resize"];
  /**  */
  readonly?: PieTextarea["readonly"];
  /**  */
  autoFocus?: PieTextarea["autoFocus"];
  /**  */
  required?: PieTextarea["required"];
  /**  */
  status?: PieTextarea["status"];
  /**  */
  assistiveText?: PieTextarea["assistiveText"];
  /**  */
  name?: PieTextarea["name"];
  /**  */
  autocomplete?: PieTextarea["autocomplete"];
  /**  */
  placeholder?: PieTextarea["placeholder"];
  /**  */
  focusTarget?: PieTextarea["focusTarget"];
  /** (Read-only) returns a ValidityState with the validity states that this element is in.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity */
  validity?: PieTextarea["validity"];
  /** when the textarea value is changed. */
  oninput?: (e: CustomEvent<InputEvent>) => void;
  /** when the textarea value is changed. */
  onchange?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **input** - when the textarea value is changed.
   * - **change** - when the textarea value is changed.
   *
   * ### **Methods:**
   *  - **formDisabledCallback(disabled: _boolean_): _void_** - Called after the disabled state of the element changes,
   * either because the disabled attribute of this element was added or removed;
   * or because the disabled state changed on a <fieldset> that's an ancestor of this element.
   * - **formResetCallback(): _void_** - Called when the form that owns this component is reset.
   * Resets the value to the default value.
   */
  "pie-textarea": DefineComponent<PieTextareaProps>;
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
