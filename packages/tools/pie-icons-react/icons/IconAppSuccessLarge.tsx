import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconAppSuccessLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--app-success-large", className, iconSize, "IconAppSuccessLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M22.125 2.875H9.875A2.625 2.625 0 0 0 7.25 5.5v21a2.625 2.625 0 0 0 2.625 2.625h12.25A2.625 2.625 0 0 0 24.75 26.5v-21a2.625 2.625 0 0 0-2.625-2.625ZM23 26.5a.875.875 0 0 1-.875.875H9.875A.875.875 0 0 1 9 26.5v-21a.875.875 0 0 1 .875-.875h2.739l.691 1.75h5.39l.691-1.75h2.739A.875.875 0 0 1 23 5.5v21Zm-3.684-14.621 1.243 1.242-5.25 5.25a.875.875 0 0 1-1.243 0l-2.625-2.625 1.243-1.242 2.004 2.012 4.628-4.637Z" /></svg>;
};
export default IconAppSuccessLarge;