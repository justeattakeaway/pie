import type { DefineComponent } from "vue";
import type { PieModal, CustomEvent } from "./dist/index.js";

type PieModalProps = {
  /**  */
  aria?: PieModal["aria"];
  /**  */
  heading?: PieModal["heading"];
  /**  */
  headingLevel?: PieModal["headingLevel"];
  /**  */
  hasBackButton?: PieModal["hasBackButton"];
  /**  */
  hasStackedActions?: PieModal["hasStackedActions"];
  /**  */
  isDismissible?: PieModal["isDismissible"];
  /**  */
  isHeadingEmphasised?: PieModal["isHeadingEmphasised"];
  /**  */
  isFooterPinned?: PieModal["isFooterPinned"];
  /**  */
  isFullWidthBelowMid?: PieModal["isFullWidthBelowMid"];
  /**  */
  isLoading?: PieModal["isLoading"];
  /**  */
  isOpen?: PieModal["isOpen"];
  /**  */
  leadingAction?: PieModal["leadingAction"];
  /**  */
  position?: PieModal["position"];
  /**  */
  returnFocusAfterCloseSelector?: PieModal["returnFocusAfterCloseSelector"];
  /**  */
  size?: PieModal["size"];
  /**  */
  supportingAction?: PieModal["supportingAction"];
  /**  */
  backgroundColor?: PieModal["backgroundColor"];
  /**  */
  imageSlotMode?: PieModal["imageSlotMode"];
  /**  */
  imageSlotAspectRatio?: PieModal["imageSlotAspectRatio"];

  /** when the modal is opened. */
  "onpie-modal-open"?: (e: CustomEvent<CustomEvent>) => void;
  /** when the modal is closed. */
  "onpie-modal-close"?: (e: CustomEvent<CustomEvent>) => void;
  /** when the modal back button is clicked. */
  "onpie-modal-back"?: (e: CustomEvent<CustomEvent>) => void;
  /** when the modal leading action is clicked. */
  "onpie-modal-leading-action-click"?: (e: CustomEvent<CustomEvent>) => void;
  /** when the modal supporting action is clicked. */
  "onpie-modal-supporting-action-click"?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **pie-modal-open** - when the modal is opened.
   * - **pie-modal-close** - when the modal is closed.
   * - **pie-modal-back** - when the modal back button is clicked.
   * - **pie-modal-leading-action-click** - when the modal leading action is clicked.
   * - **pie-modal-supporting-action-click** - when the modal supporting action is clicked.
   *
   * ### **Slots:**
   *  - **headerContent** - Used to pass additional content to the modal header that scrolls with the heading and controls.
   * - **footer** - Used to pass optional content to the modal component footer area.
   * - _default_ - The default slot is used to pass content into the modal component.
   */
  "pie-modal": DefineComponent<PieModalProps>;
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
