import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCalendarAdd = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--calendar-add", className, iconSize, "IconCalendarAdd");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M11.281 2.969V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h8.531a3.282 3.282 0 0 0 3.281-3.281V2.969h-2.625Zm1.313 7.656a1.969 1.969 0 0 1-1.969 1.969H3.406V4.28H4.72v1.094H6.03V4.281H9.97v1.094h1.312V4.281h1.313v6.344Z" /><path fill="#242E30" d="m10.625 8.07-1.969.009V6.1H7.344V8.07H5.375v1.313l1.969-.018v1.986h1.312V9.382h1.969V8.07Z" /></svg>;
};
export default IconCalendarAdd;