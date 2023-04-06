import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconPrinter = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--printer", className, iconSize, "IconPrinter");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M14.781 7.125a1.54 1.54 0 0 0-1.531-1.531h-1.969v-3.5H4.72v3.5H2.75a1.54 1.54 0 0 0-1.531 1.531v5.906h3.5v1.75h6.562v-1.75h3.5V7.125Zm-8.75-3.719H9.97v2.188H6.03V3.406ZM9.97 13.47H6.03v-3.063H9.97v3.063Zm3.5-1.75H11.28v-1.313h.875V9.094H3.844v1.312h.875v1.313H2.53V7.125a.219.219 0 0 1 .219-.219h10.5a.219.219 0 0 1 .219.219v4.594Z" /></svg>;
};
export default IconPrinter;