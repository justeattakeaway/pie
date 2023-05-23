import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconLaptop = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--laptop", className, iconSize, "IconLaptop");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M13.031 9.549V4.5A1.54 1.54 0 0 0 11.5 2.969h-7A1.54 1.54 0 0 0 2.969 4.5v5.049l-1.75 2.625v.201a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531v-.201l-1.75-2.625ZM4.281 4.5a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v4.594H4.28V4.5Zm8.969 8.094H9.566l-.315-.718H6.75l-.315.718H2.75a.229.229 0 0 1-.175-.088l1.4-2.1h8.05l1.4 2.1a.228.228 0 0 1-.175.088Z" /></svg>;
};
export default IconLaptop;