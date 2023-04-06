import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconDrag = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--drag", className, iconSize, "IconDrag");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M15 9.531H1v1.313h14V9.53Z" /><path fill="#242E30" d="M15 5.156H1V6.47h14V5.156Z" /></svg>;
};
export default IconDrag;