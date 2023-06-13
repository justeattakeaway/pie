import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLocationPinUser = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--location-pin-user", className, iconSize, "IconLocationPinUser");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M8 4.08a1.54 1.54 0 1 0 0 3.08 1.54 1.54 0 0 0 0-3.08Z" /><path d="M11.658 3.187a5.136 5.136 0 0 0-7.315 0 5.25 5.25 0 0 0 0 7.377L8 14.265l3.658-3.701a5.25 5.25 0 0 0 0-7.377Zm-2.46 8.164L8 12.56 5.375 9.934a2.012 2.012 0 0 1 1.47-.613h2.126a2.004 2.004 0 0 1 1.549.718L9.199 11.35Zm2.118-2.257a3.238 3.238 0 0 0-2.345-.998H6.845a3.246 3.246 0 0 0-2.231.875A4.078 4.078 0 0 1 5.19 4.02a3.946 3.946 0 0 1 5.618 0 4.095 4.095 0 0 1 .507 5.075Z" /></svg>;
};
export default IconLocationPinUser;