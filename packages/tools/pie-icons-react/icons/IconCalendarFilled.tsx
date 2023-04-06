import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCalendarFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--calendar-filled", className, iconSize, "IconCalendarFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M11.281 2.969V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h8.531a3.282 3.282 0 0 0 3.281-3.281V2.969h-2.625ZM5.261 7.78 4.605 6.47h6.842l-.656 1.312h-5.53Z" /></svg>;
};
export default IconCalendarFilled;