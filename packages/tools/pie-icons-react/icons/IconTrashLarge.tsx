import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconTrashLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--trash-large", className, iconSize, "IconTrashLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m18.03 14.25-.621 7.875h1.75l.63-7.875H18.03Z" /><path fill="#242E30" d="M19.938 4.625h-7.875l-.876 1.75h9.626l-.875-1.75Z" /><path fill="#242E30" d="m14.591 22.125-.621-7.875h-1.759l.63 7.875h1.75Z" /><path fill="#242E30" d="M3.75 8.125v1.75h2.319l1.601 16.87a2.625 2.625 0 0 0 2.625 2.38h11.428a2.624 2.624 0 0 0 2.625-2.38l1.583-16.87h2.319v-1.75H3.75Zm18.839 18.454a.876.876 0 0 1-.875.796H10.278a.875.875 0 0 1-.876-.796L7.829 9.875h16.344L22.59 26.579Z" /></svg>;
};
export default IconTrashLarge;