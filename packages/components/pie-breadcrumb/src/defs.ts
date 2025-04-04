// TODO - please remove the eslint disable comment below when you add props to this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface

export type BreadcrumbItem = {
  label: string;
  href: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export const componentSelector = 'pie-breadcrumb';
export const componentClass = 'c-breadcrumb';
