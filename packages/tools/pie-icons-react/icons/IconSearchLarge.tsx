import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconSearchLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--search-large", className, iconSize, "IconSearchLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M27.996 26.754 23 21.766A10.972 10.972 0 1 0 21.766 23l4.988 4.988 1.242-1.234Zm-13.309-2.879a9.187 9.187 0 1 1 9.188-9.188 9.196 9.196 0 0 1-9.188 9.188Z" /></svg>;
};
export default IconSearchLarge;