import { PieButton as PieButtonElement } from "../../dist/index.js";

export type { PieButtonElement };

export interface PieButtonProps {
  /** undefined */
  disabled?: boolean;

  /** undefined */
  isloading?: boolean;

  /** undefined */
  isfullwidth?: boolean;

  /** undefined */
  isresponsive?: boolean;

  /** undefined */
  size?: PieButtonElement["size"];

  /** undefined */
  type?: PieButtonElement["type"];

  /** undefined */
  variant?: PieButtonElement["variant"];

  /** undefined */
  iconplacement?: PieButtonElement["iconplacement"];

  /** undefined */
  name?: PieButtonElement["name"];

  /** undefined */
  value?: PieButtonElement["value"];

  /** undefined */
  formaction?: PieButtonElement["formaction"];

  /** undefined */
  formenctype?: PieButtonElement["formenctype"];

  /** undefined */
  formmethod?: PieButtonElement["formmethod"];

  /** undefined */
  formnovalidate?: PieButtonElement["formnovalidate"];

  /** undefined */
  formtarget?: PieButtonElement["formtarget"];

  /** undefined */
  responsivesize?: PieButtonElement["responsivesize"];

  /** Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS). */
  id?: string;

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: string | object;

  /** Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the `<slot>` element whose [name](https://developer.mozilla.org/docs/Web/HTML/Element/slot#attr-name) attribute's value matches that slot attribute's value. */
  slot?: string;

  /** Prevents content from being rendered by the browser. */
  hidden?: boolean;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Content between the opening and closing component tags. */
  children?: any;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: string;

  /** Triggered when a user clicks an element. */
  onClick?: (event: React.MouseEventHandler) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Slots:**
 *  - **icon** - The icon slot
 * - _default_ - Default slot
 */
export const PieButton: React.ForwardRefExoticComponent<PieButtonProps>;
