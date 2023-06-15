import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPrinterFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--printer-filled-large", className, iconSize, "IconPrinterFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M23 9V3.75H9V9h14Z" /><path d="M21.25 20.41h-10.5v7.84h10.5v-7.84Z" /><path d="M26.5 10.75h-21a2.625 2.625 0 0 0-2.625 2.625V24.75H9v-4.375H7.25v-1.75h17.5v1.75H23v4.375h6.125V13.375A2.625 2.625 0 0 0 26.5 10.75Zm-5.25 6.125v-1.75h3.5v1.75h-3.5Z" /></svg>;
};
export default IconPrinterFilledLarge;