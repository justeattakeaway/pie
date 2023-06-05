import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPresentationChart = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--presentation-chart", className, iconSize, "IconPresentationChart");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M15 2.094H1v1.312h1.094v5.469a1.54 1.54 0 0 0 1.531 1.531h3.719v1.707l-1.969 2.012h1.82L8 13.311l.805.814h1.82l-1.969-2.021v-1.698h3.719a1.54 1.54 0 0 0 1.531-1.531V3.406H15V2.094Zm-2.406 6.781a.219.219 0 0 1-.219.219h-8.75a.219.219 0 0 1-.219-.219V3.406h9.188v5.469Z" /></svg>;
};
export default IconPresentationChart;