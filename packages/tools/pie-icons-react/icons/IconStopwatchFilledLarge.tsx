import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconStopwatchFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--stopwatch-filled-large", className, iconSize, "IconStopwatchFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M17.75 6.419V4.625h3.5l-.604-1.75h-7.542l-.604 1.75H16v1.794a11.375 11.375 0 0 0-9.625 6.956h4.375a.875.875 0 0 1 .875.875v7a.875.875 0 0 1-.875.875H6.375A11.375 11.375 0 1 0 17.75 6.419ZM16 11.669h1.75v5.626l3.946 2.371-.875 1.505L16 18.25v-6.58Z" /><path fill="#242E30" d="M9.875 16.875v-1.75H2l.788 1.75h7.087Z" /><path fill="#242E30" d="M9.875 20.375v-1.75h-5.25l.787 1.75h4.463Z" /></svg>;
};
export default IconStopwatchFilledLarge;