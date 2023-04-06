import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconTrashFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--trash-filled-large", className, iconSize, "IconTrashFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M19.938 4.625h-7.875l-.876 1.75h9.626l-.875-1.75Z" /><path fill="#242E30" d="M3.75 8.125v1.75h2.319l1.601 16.87a2.625 2.625 0 0 0 2.625 2.38h11.428a2.624 2.624 0 0 0 2.625-2.38l1.583-16.87h2.319v-1.75H3.75Zm8.461 6.125h1.75l.63 7.875h-1.75l-.63-7.875Zm6.948 7.875h-1.75l.63-7.875h1.75l-.63 7.875Z" /></svg>;
};
export default IconTrashFilledLarge;