import type { DefineComponent } from "vue";
import type { PieChip, Event } from "./dist/index.js";

type PieChipProps = {
  /**  */
  variant?: PieChip["variant"];
  /**  */
  type?: PieChip["type"];
  /**  */
  disabled?: PieChip["disabled"];
  /**  */
  isSelected?: PieChip["isSelected"];
  /**  */
  isLoading?: PieChip["isLoading"];
  /**  */
  isDismissible?: PieChip["isDismissible"];
  /**  */
  aria?: PieChip["aria"];

  /** when a user clicks the close button. */
  onclose?: (e: CustomEvent<Event>) => void;
  /** when a user interacts with the chip of type checkbox. */
  onchange?: (e: CustomEvent<Event>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **close** - when a user clicks the close button.
   * - **change** - when a user interacts with the chip of type checkbox.
   *
   * ### **Slots:**
   *  - **icon** - The icon slot
   * - _default_ - Default slot
   */
  "pie-chip": DefineComponent<PieChipProps>;
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
