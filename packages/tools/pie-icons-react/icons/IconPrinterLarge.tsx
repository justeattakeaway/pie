import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPrinterLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--printer-large", className, iconSize, "IconPrinterLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M29.125 13.375A2.625 2.625 0 0 0 26.5 10.75H23v-7H9v7H5.5a2.625 2.625 0 0 0-2.625 2.625V24.75H9v3.5h14v-3.5h6.125V13.375ZM10.75 5.5h10.5v5.25h-10.5V5.5Zm10.5 21h-10.5v-6.125h10.5V26.5Zm6.125-3.5H23v-2.625h1.75v-1.75H7.25v1.75H9V23H4.625v-9.625A.875.875 0 0 1 5.5 12.5h21a.875.875 0 0 1 .875.875V23Zm-6.125-7.875h3.5v1.75h-3.5v-1.75Z" /></svg>;
};
export default IconPrinterLarge;