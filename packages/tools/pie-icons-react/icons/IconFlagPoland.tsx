import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconFlagPoland = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--poland", className, iconSize, "IconFlagPoland");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#D80027" d="M15 8A7 7 0 1 1 1 8" /></svg>;
};
export default IconFlagPoland;