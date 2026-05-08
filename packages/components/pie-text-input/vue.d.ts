import type { DefineComponent } from "vue";
import type { PieTextInput, InputEvent, CustomEvent } from "./dist/index.js";

type PieTextInputProps = {
  /**  */
  type?: PieTextInput["type"];
  /**  */
  value?: PieTextInput["value"];
  /**  */
  name?: PieTextInput["name"];
  /**  */
  disabled?: PieTextInput["disabled"];
  /**  */
  pattern?: PieTextInput["pattern"];
  /**  */
  minlength?: PieTextInput["minlength"];
  /**  */
  maxlength?: PieTextInput["maxlength"];
  /**  */
  autocomplete?: PieTextInput["autocomplete"];
  /**  */
  placeholder?: PieTextInput["placeholder"];
  /**  */
  autoFocus?: PieTextInput["autoFocus"];
  /**  */
  inputmode?: PieTextInput["inputmode"];
  /**  */
  readonly?: PieTextInput["readonly"];
  /**  */
  defaultValue?: PieTextInput["defaultValue"];
  /**  */
  assistiveText?: PieTextInput["assistiveText"];
  /**  */
  status?: PieTextInput["status"];
  /**  */
  step?: PieTextInput["step"];
  /**  */
  min?: PieTextInput["min"];
  /**  */
  max?: PieTextInput["max"];
  /**  */
  size?: PieTextInput["size"];
  /**  */
  required?: PieTextInput["required"];
  /**  */
  focusTarget?: PieTextInput["focusTarget"];
  /** (Read-only) returns a ValidityState with the validity states that this element is in.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity */
  validity?: PieTextInput["validity"];
  /** when the input value is changed. */
  oninput?: (e: CustomEvent<InputEvent>) => void;
  /** when the input value is changed. */
  onchange?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **input** - when the input value is changed.
   * - **change** - when the input value is changed.
   *
   * ### **Methods:**
   *  - **formDisabledCallback(disabled: _boolean_): _void_** - Called after the disabled state of the element changes,
   * either because the disabled attribute of this element was added or removed;
   * or because the disabled state changed on a <fieldset> that's an ancestor of this element.
   * - **formResetCallback(): _void_** - Called when the form that owns this component is reset.
   * Resets the value to the default value.
   *
   * ### **Slots:**
   *  - **leadingText** - Short text to display at the start of the input. Wrap the text in a <span>. Do not use with leadingIcon at the same time.
   * - **leadingIcon** - An icon to display at the start of the input. Do not use with leadingText at the same time.
   * - **trailingText** - Short text to display at the end of the input. Wrap the text in a <span>. Do not use with trailingIcon at the same time.
   * - **trailingIcon** - An icon to display at the end of the input. Do not use with trailingText at the same time.
   */
  "pie-text-input": DefineComponent<PieTextInputProps>;
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
