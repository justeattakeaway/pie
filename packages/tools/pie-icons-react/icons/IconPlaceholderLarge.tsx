import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconPlaceholderLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--placeholder-large", className, iconSize, "IconPlaceholderLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" fillRule="evenodd" d="M.166 0h31.668L32 .166v31.668l-.166.166H.166L0 31.834V.166L.166 0Zm31.502 31.668V.33H.33v31.337h31.337ZM6.537 2h18.926A4.537 4.537 0 0 1 30 6.537v18.926A4.537 4.537 0 0 1 25.463 30H6.537A4.537 4.537 0 0 1 2 25.463V6.537A4.537 4.537 0 0 1 6.537 2Z" clipRule="evenodd" /></svg>;
};
export default IconPlaceholderLarge;