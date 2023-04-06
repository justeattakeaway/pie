import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconNotificationFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--notification-filled", className, iconSize, "IconNotificationFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M13.504 9.951a4.577 4.577 0 0 1-1.348-3.255V6.25a4.165 4.165 0 0 0-1.365-3.08 4.208 4.208 0 0 0-2.135-1.006V1H7.344v1.164a4.287 4.287 0 0 0-3.5 4.252v.28a4.576 4.576 0 0 1-1.348 3.255l-.402.403v1.802h11.812v-1.802l-.402-.403Z" /><path fill="#242E30" d="M8 14.781a2.817 2.817 0 0 0 2.371-1.312H5.63A2.819 2.819 0 0 0 8 14.78Z" /></svg>;
};
export default IconNotificationFilled;