import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconHouseFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--house-filled", className, iconSize, "IconHouseFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_2290_4013)"><path d="M8.875 2.348a1.75 1.75 0 0 0-1.75.008C4.771 3.905 1.114 7.904 1 8.08l.971.875s.42-.464 1.042-1.111v6.055h10.062V7.86a38.793 38.793 0 0 1 1.033 1.103l.97-.875a47.034 47.034 0 0 0-6.203-5.74Zm-1.75 8.277a.875.875 0 0 1 1.75 0v1.969h-1.75v-1.969Z" /></g><defs><clipPath id="prefix__clip0_2290_4013"><rect width={14} height={14} transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconHouseFilled;