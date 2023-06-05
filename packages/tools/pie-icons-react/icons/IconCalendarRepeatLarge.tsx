import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCalendarRepeatLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--calendar-repeat-large", className, iconSize, "IconCalendarRepeatLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M22.125 6.375v-1.75h-1.75v1.75h-8.75v-1.75h-1.75v1.75h-5.25v21H23A4.375 4.375 0 0 0 27.375 23V6.375h-5.25ZM25.625 23A2.625 2.625 0 0 1 23 25.625H6.375v-17.5h3.5V9h1.75v-.875h8.75V9h1.75v-.875h3.5V23Zm-3.938-5.688a5.688 5.688 0 1 1-10.727-2.625l-1.383.438L9 13.506l4.375-1.54 1.531 4.375-1.645.578-.612-1.75a3.902 3.902 0 0 0-.613 2.1A3.937 3.937 0 1 0 16 13.375v-1.75a5.696 5.696 0 0 1 5.688 5.688Z" /></svg>;
};
export default IconCalendarRepeatLarge;