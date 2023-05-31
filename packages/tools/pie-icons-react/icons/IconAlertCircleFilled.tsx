import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconAlertCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--alert-circle-filled", className, iconSize, "IconAlertCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219ZM8 11.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm.464-2.625h-.928l-.481-4.244a3.5 3.5 0 0 1 1.89 0l-.481 4.244Z" /></svg>;
};
export default IconAlertCircleFilled;