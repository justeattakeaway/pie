import type { DefineComponent } from "vue";

type PieButtonProps = {
  /**  */
  size?: ButtonProps["size"];
  /**  */
  type?: ButtonProps["type"];
  /**  */
  variant?: ButtonProps["variant"];
  /**  */
  iconPlacement?: ButtonProps["iconPlacement"];
  /**  */
  disabled?: boolean;
  /**  */
  isLoading?: boolean;
  /**  */
  isFullWidth?: boolean;
  /**  */
  isResponsive?: boolean;
  /**  */
  name?: string | undefined;
  /**  */
  value?: string | undefined;
  /**  */
  formaction?: ButtonProps["formaction"];
  /**  */
  formenctype?: ButtonProps["formenctype"];
  /**  */
  formmethod?: ButtonProps["formmethod"];
  /**  */
  formnovalidate?: ButtonProps["formnovalidate"];
  /**  */
  formtarget?: ButtonProps["formtarget"];
  /**  */
  responsiveSize?: ButtonProps["responsiveSize"] | undefined;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - **icon** - The icon slot
   * - _default_ - Default slot
   */
  "pie-button": DefineComponent<PieButtonProps>;
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
