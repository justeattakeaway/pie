import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconFlagPortugal = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--portugal", className, iconSize, "IconFlagPortugal");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#6DA544" d="M1 8a7 7 0 0 0 4.567 6.563L6.174 8l-.607-6.563A7 7 0 0 0 1 8Z" /><path fill="#D80027" d="M15.002 8a7 7 0 0 0-9.435-6.563v13.126A7.002 7.002 0 0 0 15.002 8Z" /><path fill="#FFDA44" d="M5.567 10.434a2.434 2.434 0 1 0 0-4.868 2.434 2.434 0 0 0 0 4.868Z" /><path fill="#D80027" d="M4.197 6.783v1.518a1.369 1.369 0 1 0 2.737 0V6.78H4.199l-.002.002Z" /><path fill="#EEE" d="M5.567 8.76a.458.458 0 0 1-.456-.456v-.605h.913v.602a.458.458 0 0 1-.457.457v.002Z" /></svg>;
};
export default IconFlagPortugal;