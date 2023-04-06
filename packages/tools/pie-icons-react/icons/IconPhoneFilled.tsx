import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconPhoneFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--phone-filled", className, iconSize, "IconPhoneFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M11.097 14.344h.315a2.624 2.624 0 0 0 2.284-1.374l.875-1.645-3.623-2.004a1.522 1.522 0 0 0-1.994.429l-1.427 1.925a9.625 9.625 0 0 1-3.255-3.334l1.672-1.286a1.566 1.566 0 0 0 .428-1.969L4.43 1.42l-1.365.735A2.625 2.625 0 0 0 1.682 4.85a11.13 11.13 0 0 0 1.155 3.614 10.937 10.937 0 0 0 4.559 4.672 10.64 10.64 0 0 0 3.701 1.208Z" /></svg>;
};
export default IconPhoneFilled;