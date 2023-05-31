import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconRadioUnselected = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--radio-unselected", className, iconSize, "IconRadioUnselected");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781Zm0 12.25A5.47 5.47 0 0 1 2.531 8 5.47 5.47 0 0 1 8 2.531 5.47 5.47 0 0 1 13.469 8 5.47 5.47 0 0 1 8 13.469Z" /></svg>;
};
export default IconRadioUnselected;