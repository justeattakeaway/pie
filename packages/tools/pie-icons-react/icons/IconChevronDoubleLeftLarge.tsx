import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronDoubleLeftLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--chevron-double-left-large", className, iconSize, "IconChevronDoubleLeftLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M18.021 5.876 7.54 16a.131.131 0 0 0 0 .096l10.5 10.063-1.225 1.216L6.375 17.33a1.908 1.908 0 0 1 0-2.625l10.448-10.08 1.198 1.251Z" /><path d="M26.194 5.876 15.703 16a.131.131 0 0 0 0 .096l10.5 10.063-1.226 1.216-10.5-10.063a1.908 1.908 0 0 1 0-2.625L24.995 4.626l1.199 1.251Z" /></svg>;
};
export default IconChevronDoubleLeftLarge;