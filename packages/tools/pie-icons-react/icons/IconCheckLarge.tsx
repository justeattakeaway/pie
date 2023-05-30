import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCheckLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--check-large", className, iconSize, "IconCheckLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M11.258 24.242a1.813 1.813 0 0 1-1.33-.577L4.625 17.75l1.313-1.164 5.25 5.924h.087L26.089 6.76l1.286 1.19L12.596 23.7a1.838 1.838 0 0 1-1.338.586v-.044Z" /></svg>;
};
export default IconCheckLarge;