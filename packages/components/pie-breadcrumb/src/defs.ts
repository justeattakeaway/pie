export type BreadcrumbItem = {
  label: string;
  href: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
}
