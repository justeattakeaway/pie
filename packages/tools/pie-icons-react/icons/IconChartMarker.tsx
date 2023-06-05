import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChartMarker = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--chart-marker", className, iconSize, "IconChartMarker");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M3.844 11.5h1.312V15H3.844v-3.5Zm3.5 3.5h1.312V8.875H7.344V15Zm3.5-4.375V15h1.312v-4.375h-1.312Zm-.158-4.751L8 8 5.314 5.874a1.531 1.531 0 0 1-.595-1.208V1.22h6.562v3.447a1.53 1.53 0 0 1-.595 1.208ZM9.97 2.53H6.03v2.135a.245.245 0 0 0 .088.175L8 6.294 9.881 4.84a.245.245 0 0 0 .088-.175V2.531Z" /></svg>;
};
export default IconChartMarker;