import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPieChartLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--pie-chart-large", className, size, "IconPieChartLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16.875 2.875H16A13.125 13.125 0 0 0 2.875 16v.875h14v-14Zm-1.75 12.25h-10.5a11.375 11.375 0 0 1 10.5-10.5v10.5Zm.07 11.375-.14 1.75a12.294 12.294 0 0 1-11.016-9.625h1.793a10.552 10.552 0 0 0 9.363 7.875ZM28.25 16a12.294 12.294 0 0 1-11.305 12.25l-.14-1.75a10.5 10.5 0 0 0 1.82-20.668V4.03A12.25 12.25 0 0 1 28.25 16Z" /></svg>;
};
export default IconPieChartLarge;