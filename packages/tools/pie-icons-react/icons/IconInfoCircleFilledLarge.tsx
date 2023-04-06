import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconInfoCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--info-circle-filled-large", className, iconSize, "IconInfoCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm.875 18.375h-1.75V14.25h1.75v7.875ZM16 12.5a1.313 1.313 0 1 1 0-2.626 1.313 1.313 0 0 1 0 2.626Z" /></svg>;
};
export default IconInfoCircleFilledLarge;