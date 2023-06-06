import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronDoubleRightLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chevron-double-right-large", className, iconSize, "IconChevronDoubleRightLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M13.979 26.124 24.46 16a.131.131 0 0 0 0-.096L13.961 5.84l1.225-1.216 10.5 10.063a1.907 1.907 0 0 1 0 2.624L15.178 27.376l-1.2-1.251Z" /><path fill="#242E30" d="M5.806 26.124 16.298 16a.131.131 0 0 0 0-.096L5.797 5.84l1.224-1.216 10.5 10.063a1.908 1.908 0 0 1 0 2.624L7.006 27.376l-1.199-1.251Z" /></svg>;
};
export default IconChevronDoubleRightLarge;