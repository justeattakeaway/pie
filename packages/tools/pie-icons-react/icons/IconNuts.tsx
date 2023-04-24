import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconNuts = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--nuts", className, iconSize, "IconNuts");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M10.345 4.5a.438.438 0 1 0 0-.875.438.438 0 0 0 0 .875Z" /><path fill="#242E30" d="M11.063 6.25a.438.438 0 1 0 0-.875.438.438 0 0 0 0 .875Z" /><path fill="#242E30" d="M9.313 6.128a.437.437 0 1 0 0-.875.437.437 0 0 0 0 .875Z" /><path fill="#242E30" d="M5.585 14.781h-.499a4.375 4.375 0 0 1-3.211-2.091A4.323 4.323 0 0 1 1.945 8a4.375 4.375 0 0 1 2.73-1.829A2.161 2.161 0 0 0 6.311 4.57c.035-.164.082-.325.14-.481a4.279 4.279 0 0 1 7.473-1.155 4.375 4.375 0 0 1 .411 4.559 3.719 3.719 0 0 1-1.33 1.522 4.996 4.996 0 0 1-1.566.683A2.424 2.424 0 0 0 9.75 11.5a4.375 4.375 0 0 1-4.2 3.246l.035.035Zm4.891-12.25a2.824 2.824 0 0 0-.464 0 3.01 3.01 0 0 0-2.423 2.31 3.5 3.5 0 0 1-2.625 2.625 3.027 3.027 0 0 0-2.437 2.905A3.01 3.01 0 0 0 2.969 12a3.045 3.045 0 0 0 4.76.577c.377-.377.646-.848.779-1.365a3.71 3.71 0 0 1 2.625-2.791 3.745 3.745 0 0 0 1.163-.507 2.45 2.45 0 0 0 .875-.972 3.08 3.08 0 0 0-.271-3.22 3.01 3.01 0 0 0-2.424-1.19Z" /></svg>;
};
export default IconNuts;