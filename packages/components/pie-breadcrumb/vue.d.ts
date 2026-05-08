import type { DefineComponent } from "vue";
import type { PieBreadcrumb, PieBreadcrumbItem } from "./dist/index.js";

type PieBreadcrumbProps = {
  /**  */
  variant?: PieBreadcrumb["variant"];
  /**  */
  isCompact?: PieBreadcrumb["isCompact"];
  /**  */
  hideCurrentPage?: PieBreadcrumb["hideCurrentPage"];
  /**  */
  aria?: PieBreadcrumb["aria"];
};

type PieBreadcrumbItemProps = {
  /**  */
  href?: PieBreadcrumbItem["href"];
  /**  */
  target?: PieBreadcrumbItem["target"];
  /**  */
  aria?: PieBreadcrumbItem["aria"];
};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  "pie-breadcrumb": DefineComponent<PieBreadcrumbProps>;

  /**
   *
   * ---
   *
   */
  "pie-breadcrumb-item": DefineComponent<PieBreadcrumbItemProps>;
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
