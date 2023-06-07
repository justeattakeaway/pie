import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconClockAdd = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--clock-add", className, iconSize, "IconClockAdd");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M10.012 10.905 7.064 9.137V5.095h1.312v3.299l2.31 1.391-.674 1.12Z" /><path fill="#242E30" d="M8 1.219A6.79 6.79 0 0 0 1.219 8c.002.497.057.993.166 1.479H2.75A5.469 5.469 0 1 1 8 13.469a6.607 6.607 0 0 1-.726-.053h-.28v1.287c.333.048.67.074 1.006.078A6.781 6.781 0 1 0 8 1.22Z" /><path fill="#242E30" d="m7.65 10.791-1.969.018V8.823H4.37v1.968H2.4v1.313l1.969-.018v1.986H5.68v-1.968H7.65V10.79Z" /></svg>;
};
export default IconClockAdd;