import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCheck = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--check", className, iconSize, "IconCheck");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M5.865 12.489a1.217 1.217 0 0 1-.875-.385L1.875 8.656l.98-.875 3.028 3.369 7.253-7.822.963.875-7.35 7.875a1.216 1.216 0 0 1-.875.385l-.009.026Z" /></svg>;
};
export default IconCheck;