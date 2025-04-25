export const variants = ['default', 'scrim'] as const;

export type BreadcrumbItem = {
  label: string;
  href: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];

  /**
   * Optional variant for styling the breadcrumb component.
   */
  variant?: typeof variants[number];

  /**
   * Optional property for rendering a compact variation of the breadcrumb.
   */
  isCompact?: boolean;
}

export const defaultProps: Pick<BreadcrumbProps, 'variant' | 'isCompact'> = {
    variant: 'default',
    isCompact: false,
};

