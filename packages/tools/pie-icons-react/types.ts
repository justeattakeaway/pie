import { SVGProps } from "react";

export interface LargeIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  iconSize: number
};

export interface RegularIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  iconSize: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
};
