import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconStarCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--star-circle-filled", className, iconSize, "IconStarCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm1.627 9.117L8 9.48l-1.628.875.307-1.829-1.304-1.286 1.82-.263L8 5.322l.814 1.654 1.82.263L9.32 8.525l.306 1.811Z" /></svg>;
};
export default IconStarCircleFilled;