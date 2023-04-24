import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconFlagRomania = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--romania", className, iconSize, "IconFlagRomania");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#FFDA44" d="M7.997 1a6.91 6.91 0 0 0-2.433.438L1.244 8l4.32 6.563a6.984 6.984 0 0 0 4.867 0L14.751 8l-4.32-6.563A6.986 6.986 0 0 0 7.997 1Z" /><path fill="#D80027" d="M14.997 8a7 7 0 0 0-4.566-6.563v13.126A7 7 0 0 0 14.997 8Z" /><path fill="#0052B4" d="M5.564 14.563V1.437a7 7 0 0 0 0 13.126Z" /></svg>;
};
export default IconFlagRomania;