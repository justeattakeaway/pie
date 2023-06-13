import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowUpLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--arrow-up-large", className, iconSize, "IconArrowUpLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16.875 28.25V6.375l7 7 1.234-1.234-7.875-7.875a1.751 1.751 0 0 0-2.477 0l-7.874 7.875 1.242 1.234 7-7V28.25h1.75Z" /></svg>;
};
export default IconArrowUpLarge;