import type { DefineComponent } from "vue";
import type { PieSwitch, Event, CustomEvent } from "./dist/index.js";

type PieSwitchProps = {
  /**  */
  label?: PieSwitch["label"];
  /**  */
  labelPlacement?: PieSwitch["labelPlacement"];
  /**  */
  aria?: PieSwitch["aria"];
  /**  */
  checked?: PieSwitch["checked"];
  /**  */
  required?: PieSwitch["required"];
  /**  */
  value?: PieSwitch["value"];
  /**  */
  name?: PieSwitch["name"];
  /**  */
  disabled?: PieSwitch["disabled"];
  /**  */
  focusTarget?: PieSwitch["focusTarget"];
  /** (Read-only) returns a ValidityState with the validity states that this element is in.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity */
  validity?: PieSwitch["validity"];
  /** (Read-only) Returns a string representing a localized message that describes the validation constraints that the control does not satisfy (if any).
This string is empty if the component is valid.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage */
  validationMessage?: PieSwitch["validationMessage"];
  /**  */
  oninvalid?: (e: CustomEvent<Event>) => void;
  /** when the switch checked state is changed. */
  onchange?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **invalid**
   * - **change** - when the switch checked state is changed.
   *
   * ### **Methods:**
   *  - **checkValidity(): __** - Returns a boolean value which indicates validity of the value of the component. If the value is invalid, this method also fires the invalid event on the component.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
   * - **reportValidity(): __** - If the value is invalid, this method also fires the invalid event on the element, and (if the event isn't canceled) reports the problem to the user.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
   * - **setCustomValidity(message: _string_): _void_** - Allows a consumer to set a custom validation message on the switch. An empty string counts as valid.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
   */
  "pie-switch": DefineComponent<PieSwitchProps>;
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
