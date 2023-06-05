import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconHelpCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--help-circle-filled-large", className, iconSize, "IconHelpCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 18.375a1.313 1.313 0 1 1 0-2.626 1.313 1.313 0 0 1 0 2.626Zm1.024-5.81H16.9l-.166 1.435h-1.391l-.219-2.511h.088c1.75-.272 2.782-1.199 2.782-2.424a1.75 1.75 0 0 0-1.89-1.689 2.67 2.67 0 0 0-1.61.508l-.061.043L13.2 10.41l.07-.062a4.489 4.489 0 0 1 2.922-.997c2.704 0 3.92 1.654 3.92 3.299a3.955 3.955 0 0 1-3.088 3.666Z" /></svg>;
};
export default IconHelpCircleFilledLarge;