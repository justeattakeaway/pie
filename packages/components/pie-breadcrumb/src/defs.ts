import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const variants = ['default', 'scrim'] as const;

export interface BreadcrumbProps {
  /**
   * Optional variant for styling the breadcrumb component.
   */
  variant?: typeof variants[number];

  /**
   * Optional property for rendering a compact variation of the breadcrumb.
   */
  isCompact?: boolean;
}

export type DefaultProps = ComponentDefaultProps<BreadcrumbProps>;

export const defaultProps:DefaultProps = {
    variant: 'default',
    isCompact: false,
};

