import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCalendarAlert = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--calendar-alert", className, iconSize, "IconCalendarAlert");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M11.273 2.842V1.75h-1.31v1.09H6.037v-1.09H4.727v1.09H2.109v10.91H10.6a3.273 3.273 0 0 0 3.273-3.272V2.842h-2.6Zm1.31 7.637a1.964 1.964 0 0 1-1.982 1.964H3.418V4.15h1.309v1.09h1.31v-1.09h3.927v1.09h1.31v-1.09h1.308v6.328Z" /><path fill="#242E30" d="M8.655 6.263h-1.31v2.619h1.31V6.263Z" /><path fill="#242E30" d="M8 11.5a.873.873 0 1 0 0-1.746.873.873 0 0 0 0 1.746Z" /></svg>;
};
export default IconCalendarAlert;