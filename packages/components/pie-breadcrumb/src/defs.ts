export const variants = ['default', 'back'] as const;

export type BreadcrumbItem = {
  label: string;
  href: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: typeof variants[number];
  scrim?: boolean;
}

export const defaultProps: Pick<BreadcrumbProps, 'variant' | 'scrim'> = {
    variant: 'default',
    scrim: false,
};

export const componentSelector = 'pie-breadcrumb';
export const componentClass = 'c-breadcrumb';
