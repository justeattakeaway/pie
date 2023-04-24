import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCloseCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--close-circle-filled-large", className, iconSize, "IconCloseCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M16.25 4a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm4.996 16.004-1.242 1.242-3.754-3.762-3.754 3.762-1.242-1.242 3.762-3.754-3.762-3.754 1.242-1.242 3.754 3.762 3.754-3.762 1.242 1.242-3.762 3.754 3.762 3.754Z" /></svg>;
};
export default IconCloseCircleFilledLarge;