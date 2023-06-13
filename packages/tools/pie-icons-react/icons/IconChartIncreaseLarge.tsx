import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChartIncreaseLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chart-increase-large", className, iconSize, "IconChartIncreaseLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M6.375 23h1.75v4.375h-1.75V23Zm12.25 4.375h1.75v-8.75h-1.75v8.75Zm-6.125 0h1.75V21.25H12.5v6.125Zm12.25 0h1.75v-12.25h-1.75v12.25Zm.875-24.5h-7v1.75h5.145C17.015 12.71 12.229 14.25 5.5 14.25V16c8.006 0 13.055-2.511 19.25-9.8v4.55h1.75v-7a.875.875 0 0 0-.875-.875Z" /></svg>;
};
export default IconChartIncreaseLarge;