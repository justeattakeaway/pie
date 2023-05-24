import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconMoon = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--moon", className, iconSize, "IconMoon");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8.219 8a4.174 4.174 0 0 1 3.412-4.078 5.249 5.249 0 0 0-1.444-.927A5.39 5.39 0 0 0 8 2.531 5.469 5.469 0 0 0 8 13.47a5.39 5.39 0 0 0 2.188-.464 5.248 5.248 0 0 0 1.443-.928A4.174 4.174 0 0 1 8.22 8ZM8 12.156a4.155 4.155 0 0 1-3.689-6.18 4.156 4.156 0 0 1 4.433-2.054 5.443 5.443 0 0 0 0 8.155 4.12 4.12 0 0 1-.744.08Z" /></svg>;
};
export default IconMoon;