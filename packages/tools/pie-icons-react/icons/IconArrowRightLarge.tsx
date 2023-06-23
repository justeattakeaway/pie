import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowRightLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--arrow-right-large", className, iconSize, "IconArrowRightLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M3.75 16.875h21.875l-7 7 1.234 1.234 7.875-7.875a1.748 1.748 0 0 0 0-2.477l-7.875-7.875-1.234 1.243 7 7H3.75v1.75Z" /></svg>;
};
export default IconArrowRightLarge;