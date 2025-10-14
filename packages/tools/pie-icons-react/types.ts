import { type SVGProps } from 'react';

export interface LargeIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  size: number
}

export interface RegularIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
}
