import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconLaptopSuccessLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--laptop-success-large", className, iconSize, "IconLaptopSuccessLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M25.625 19.141V7.25A2.625 2.625 0 0 0 23 4.625H9A2.625 2.625 0 0 0 6.375 7.25v11.891l-3.5 3.5v2.109A2.625 2.625 0 0 0 5.5 27.375h21a2.625 2.625 0 0 0 2.625-2.625v-2.109l-3.5-3.5ZM8.125 7.25A.875.875 0 0 1 9 6.375h14a.875.875 0 0 1 .875.875v11.375H8.125V7.25Zm19.25 17.5a.875.875 0 0 1-.875.875h-21a.875.875 0 0 1-.875-.875v-1.391l2.984-2.984H24.39l2.984 2.984v1.391ZM19.062 9.254l1.243 1.242-5.617 5.609-2.993-2.984 1.242-1.242 1.75 1.75 4.376-4.375Zm-.358 12.871.7 1.75h-6.808l.7-1.75h5.408Z" /></svg>;
};
export default IconLaptopSuccessLarge;