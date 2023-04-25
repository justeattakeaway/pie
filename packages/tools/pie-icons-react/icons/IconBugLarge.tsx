import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconBugLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--bug-large", className, iconSize, "IconBugLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="m23.875 12.045 3.5-2.8v-2.24l-3.587 2.87h-1.75a6.125 6.125 0 0 0-12.093 0h-1.75l-3.57-2.87v2.24l3.5 2.8V16H3.75v1.75h4.375v3.938L5.5 23.805v2.24l3.001-2.398a7.875 7.875 0 0 0 14.998 0l3.001 2.398v-2.24l-2.625-2.117V17.75h4.375V16h-4.375v-3.955ZM16 6.375a4.375 4.375 0 0 1 4.288 3.5h-8.575A4.375 4.375 0 0 1 16 6.375Zm6.125 14.875a6.125 6.125 0 0 1-5.25 6.055v-10.43h-1.75v10.43a6.125 6.125 0 0 1-5.25-6.055v-9.625h12.25v9.625Z" /></svg>;
};
export default IconBugLarge;