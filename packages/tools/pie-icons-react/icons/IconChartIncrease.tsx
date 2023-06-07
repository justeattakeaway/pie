import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChartIncrease = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chart-increase", className, iconSize, "IconChartIncrease");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M2.969 11.5H4.28v2.625H2.97V11.5Zm4.375 2.625h1.312V9.75H7.344v4.375Zm4.375 0h1.312V8H11.72v6.125Zm.656-12.031h-3.5v1.312h2.047C8.455 6.25 6.092 7.344 2.75 7.344v1.312c3.631 0 6.309-1.225 8.969-4.156v1.75h1.312v-3.5a.665.665 0 0 0-.656-.656Z" /></svg>;
};
export default IconChartIncrease;