import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconArrowLeftLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--arrow-left-large", className, iconSize, "IconArrowLeftLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M28.25 15.125H6.375l7-7-1.207-1.243-7.875 7.875a1.751 1.751 0 0 0 0 2.477l7.875 7.875 1.207-1.234-7-7H28.25v-1.75Z" /></svg>;
};
export default IconArrowLeftLarge;