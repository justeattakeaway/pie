import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconArrowDownCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--arrow-down-circle-filled-large", className, iconSize, "IconArrowDownCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M16.875 3.75v15.367l4.165-4.17 1.234 1.235-5.04 5.047a1.749 1.749 0 0 1-2.468 0l-5.04-5.047 1.234-1.235 4.165 4.17V3.75a12.244 12.244 0 0 0-8.239 4.038 12.275 12.275 0 0 0 .608 17.023 12.242 12.242 0 0 0 17.012 0 12.273 12.273 0 0 0 .608-17.023 12.244 12.244 0 0 0-8.239-4.038Z" /></svg>;
};
export default IconArrowDownCircleFilledLarge;