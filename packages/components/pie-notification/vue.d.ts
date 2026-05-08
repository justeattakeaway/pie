import type { DefineComponent } from "vue";
import type { PieNotification, CustomEvent } from "./dist/index.js";

type PieNotificationProps = {
  /**  */
  isOpen?: PieNotification["isOpen"];
  /**  */
  variant?: PieNotification["variant"];
  /**  */
  position?: PieNotification["position"];
  /**  */
  isDismissible?: PieNotification["isDismissible"];
  /**  */
  isCompact?: PieNotification["isCompact"];
  /**  */
  heading?: PieNotification["heading"];
  /**  */
  headingLevel?: PieNotification["headingLevel"];
  /**  */
  hideIcon?: PieNotification["hideIcon"];
  /**  */
  leadingAction?: PieNotification["leadingAction"];
  /**  */
  supportingAction?: PieNotification["supportingAction"];
  /**  */
  hasStackedActions?: PieNotification["hasStackedActions"];
  /**  */
  aria?: PieNotification["aria"];
  /**  */
  _iconSlot?: PieNotification["_iconSlot"];
  /**  When the notification leading action is clicked. */
  "onpie-notification-leading-action-click"?: (e: CustomEvent<CustomEvent>) => void;
  /** When the notification supporting action is clicked. */
  "onpie-notification-supporting-action-click"?: (e: CustomEvent<CustomEvent>) => void;
  /** When the notification is closed. */
  "onpie-notification-close"?: (e: CustomEvent<CustomEvent>) => void;
  /** When the notification is opened. */
  "onpie-notification-open"?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **pie-notification-leading-action-click** -  When the notification leading action is clicked.
   * - **pie-notification-supporting-action-click** - When the notification supporting action is clicked.
   * - **pie-notification-close** - When the notification is closed.
   * - **pie-notification-open** - When the notification is opened.
   *
   * ### **Slots:**
   *  - _default_ - Default slot
   * - **icon** - The icon slot
   */
  "pie-notification": DefineComponent<PieNotificationProps>;
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
