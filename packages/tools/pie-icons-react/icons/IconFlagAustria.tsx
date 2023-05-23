import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconFlagAustria = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--austria", className, iconSize, "IconFlagAustria");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#D80027" d="M8 1a7 7 0 0 0-6.563 4.566h13.126A7 7 0 0 0 8 1Z" /><path fill="#D80027" d="M8 15a7 7 0 0 0 6.563-4.566H1.437A7 7 0 0 0 8 15Z" /></svg>;
};
export default IconFlagAustria;