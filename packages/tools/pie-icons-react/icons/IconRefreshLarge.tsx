import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconRefreshLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--refresh-large", className, iconSize, "IconRefreshLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M18.406 12.797h6.414a1.68 1.68 0 0 0 1.68-1.68V4.774h-1.75v5.433l-.333-.55-.052-.07a10.5 10.5 0 1 0 2.047 7.717l-1.75-.228a8.75 8.75 0 1 1-1.75-6.466l.263.438h-4.769v1.75Z" /></svg>;
};
export default IconRefreshLarge;