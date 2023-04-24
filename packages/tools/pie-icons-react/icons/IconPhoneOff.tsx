import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconPhoneOff = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--phone-off", className, iconSize, "IconPhoneOff");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="m8.954 9.75-1.427 1.925a8.694 8.694 0 0 1-1.277-.971L15 1.875h-1.846L5.279 9.75a9.38 9.38 0 0 1-1.006-1.409l1.67-1.286a1.566 1.566 0 0 0 .43-1.969L4.43 1.42l-1.365.735A2.625 2.625 0 0 0 1.683 4.85a11.216 11.216 0 0 0 2.704 5.871L1 14.125h1.846l2.459-2.476a10.702 10.702 0 0 0 2.091 1.47 10.64 10.64 0 0 0 3.702 1.207h.314a2.624 2.624 0 0 0 2.275-1.391l.876-1.645-3.614-1.986a1.522 1.522 0 0 0-1.995.446ZM2.977 4.675a1.356 1.356 0 0 1 .71-1.365l.2-.105 1.33 2.502a.245.245 0 0 1-.07.307L3.67 7.125a10.045 10.045 0 0 1-.692-2.45Zm9.556 7.7a1.278 1.278 0 0 1-1.26.691A9.396 9.396 0 0 1 8.7 12.34l1.313-1.75a.227.227 0 0 1 .288-.07l2.503 1.391-.271.464Z" /></svg>;
};
export default IconPhoneOff;