import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconHelpCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--help-circle-large", className, iconSize, "IconHelpCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M17.313 20.813a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0ZM16.192 9.35a4.489 4.489 0 0 0-2.923.998l-.07.06 1.269 1.26.061-.043a2.669 2.669 0 0 1 1.61-.508 1.75 1.75 0 0 1 1.89 1.69c0 1.224-1.068 2.152-2.783 2.423h-.122l.219 2.52h1.391l.14-1.4h.122a3.955 3.955 0 0 0 3.09-3.666c.026-1.68-1.19-3.334-3.895-3.334ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z" /></svg>;
};
export default IconHelpCircleLarge;