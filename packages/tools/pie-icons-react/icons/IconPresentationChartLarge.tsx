import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPresentationChartLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--presentation-chart-large", className, iconSize, "IconPresentationChartLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M29.125 5.5H2.875v1.75h1.75V19.5a2.625 2.625 0 0 0 2.625 2.625h7.875V24.4l-3.824 3.85h2.468L16 25.992l2.231 2.258h2.459l-3.815-3.867v-2.258h7.875a2.625 2.625 0 0 0 2.625-2.625V7.25h1.75V5.5Zm-3.5 14a.875.875 0 0 1-.875.875H7.25a.875.875 0 0 1-.875-.875V7.25h19.25V19.5ZM12.5 16.875h-1.75v-3.5h1.75v3.5Zm4.375 0h-1.75v-7h1.75v7Zm4.375 0H19.5v-5.25h1.75v5.25Z" /></svg>;
};
export default IconPresentationChartLarge;