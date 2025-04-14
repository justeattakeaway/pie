export const variants = ['default', 'back'] as const;

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
   * Optional flag to enable or disable a scrim overlay for readability.
   */
  scrim?: boolean;
}

export const defaultProps: Pick<BreadcrumbProps, 'variant' | 'scrim'> = {
    variant: 'default',
    scrim: false,
};

