import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconFlagIsrael = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--israel", className, iconSize, "IconFlagIsrael");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#0052B4" d="M10.636 6.477h-1.76L8 4.957l-.877 1.52H5.364L6.242 8l-.875 1.523h1.756L8 11.043l.878-1.52h1.758L9.758 8l.876-1.523h.002ZM9.078 8l-.54.935H7.463L6.92 8l.542-.935h1.077L9.08 8h-.002ZM8 6.13l.2.347h-.4L8 6.13Zm-1.618.935h.401l-.202.347-.2-.347Zm0 1.87.2-.347.201.347h-.401ZM8 9.87l-.2-.347h.4L8 9.87Zm1.619-.935h-.402l.202-.347.2.347Zm-.402-1.87h.402l-.2.347-.202-.347Zm3.142-4.542H3.642a7.036 7.036 0 0 0-1.614 1.824h11.944a7.034 7.034 0 0 0-1.613-1.824ZM3.642 13.477h8.717a7.033 7.033 0 0 0 1.613-1.824H2.028a7.034 7.034 0 0 0 1.614 1.824Z" /></svg>;
};
export default IconFlagIsrael;