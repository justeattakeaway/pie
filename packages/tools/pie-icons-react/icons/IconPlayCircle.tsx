import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPlayCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--play-circle", className, iconSize, "IconPlayCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm0 12.25A5.469 5.469 0 1 1 8 2.53a5.469 5.469 0 0 1 0 10.938Z" /><path fill="#242E30" d="M11.141 7.282 6.82 5.305a.77.77 0 0 0-.753.07.779.779 0 0 0-.367.656v3.973a.779.779 0 0 0 .367.656.742.742 0 0 0 .752.053l4.323-1.978a.788.788 0 0 0 0-1.435v-.018Zm-4.13 1.882V6.836L9.557 8 7.011 9.164Z" /></svg>;
};
export default IconPlayCircle;