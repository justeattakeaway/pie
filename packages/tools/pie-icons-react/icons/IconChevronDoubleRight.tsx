import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconChevronDoubleRight = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--chevron-double-right", className, iconSize, "IconChevronDoubleRight");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M7.754 13.18 13.126 8 7.71 2.82l.875-.963 5.539 5.347a1.164 1.164 0 0 1 0 1.636l-5.469 5.285-.901-.945Z" /><path fill="#242E30" d="M2.784 13.18 8.139 8 2.74 2.82l.875-.963L9.18 7.204a1.164 1.164 0 0 1 0 1.671l-5.495 5.25-.901-.945Z" /></svg>;
};
export default IconChevronDoubleRight;