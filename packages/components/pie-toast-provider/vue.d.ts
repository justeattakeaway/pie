import type { DefineComponent } from "vue";
import type { PieToastProvider, CustomEvent } from "./dist/index.js";

type PieToastProviderProps = {
  /**  */
  options?: PieToastProvider["options"];
  /**  */
  position?: PieToastProvider["position"];

  /** when a toast is added or removed from the queue. */
  "onpie-toast-provider-queue-update"?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **pie-toast-provider-queue-update** - when a toast is added or removed from the queue.
   *
   * ### **Methods:**
   *  - **createToast(toast: _ToastProps_)** - Adds a new toast to the queue and triggers its display if no toast is currently active.
   * - **clearToasts()** -
   * Clears all toasts from the queue and dismisses the currently visible toast.
   */
  "pie-toast-provider": DefineComponent<PieToastProviderProps>;
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
