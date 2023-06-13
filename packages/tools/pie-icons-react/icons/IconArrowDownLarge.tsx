import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowDownLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--arrow-down-large", className, iconSize, "IconArrowDownLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M15.125 3.75v21.875l-7-7-1.242 1.207 7.875 7.875a1.75 1.75 0 0 0 2.476 0l7.875-7.875-1.234-1.207-7 7V3.75h-1.75Z" /></svg>;
};
export default IconArrowDownLarge;