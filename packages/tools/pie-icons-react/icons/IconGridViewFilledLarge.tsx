import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconGridViewFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--grid-view-filled-large", className, iconSize, "IconGridViewFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M4.625 14.25h9.625V4.625H4.625v9.625Z" /><path fill="#242E30" d="M17.75 14.25h9.625V4.625H17.75v9.625Z" /><path fill="#242E30" d="M4.625 27.375h9.625V17.75H4.625v9.625Z" /><path fill="#242E30" d="M17.75 27.375h9.625V17.75H17.75v9.625Z" /></svg>;
};
export default IconGridViewFilledLarge;