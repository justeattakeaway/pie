import type { DefineComponent } from "vue";
import type { PieToast, CustomEvent } from "./dist/index.js";

type PieToastProps = {
  /**  */
  message?: PieToast["message"];
  /**  */
  isOpen?: PieToast["isOpen"];
  /**  */
  variant?: PieToast["variant"];
  /**  */
  isStrong?: PieToast["isStrong"];
  /**  */
  isDismissible?: PieToast["isDismissible"];
  /**  */
  isMultiline?: PieToast["isMultiline"];
  /**  */
  leadingAction?: PieToast["leadingAction"];
  /**  */
  duration?: PieToast["duration"];

  /** when a user clicks close button or when the toast auto dismiss. */
  "onpie-toast-close"?: (e: CustomEvent<CustomEvent>) => void;
  /** when the toast is opened. */
  "onpie-toast-open"?: (e: CustomEvent<CustomEvent>) => void;
  /** when the user interacts with the leading action. */
  "onpie-toast-leading-action-click"?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **pie-toast-close** - when a user clicks close button or when the toast auto dismiss.
   * - **pie-toast-open** - when the toast is opened.
   * - **pie-toast-leading-action-click** - when the user interacts with the leading action.
   */
  "pie-toast": DefineComponent<PieToastProps>;
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
