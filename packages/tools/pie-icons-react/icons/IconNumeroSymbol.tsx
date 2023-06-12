import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconNumeroSymbol = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--numero-symbol", className, iconSize, "IconNumeroSymbol");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M12.183 9.015a2.827 2.827 0 0 1-1.13-.21 2.371 2.371 0 0 1-.813-.56 2.17 2.17 0 0 1-.49-.823 3.001 3.001 0 0 1-.166-1.006 2.923 2.923 0 0 1 .166-1.041c.096-.325.264-.623.49-.875.229-.242.506-.433.814-.56a2.827 2.827 0 0 1 1.129-.21c.39-.009.776.063 1.137.21.305.127.58.318.805.56.218.255.379.553.473.875.114.323.17.664.166 1.006.002.343-.054.683-.166 1.006a2.248 2.248 0 0 1-.473.823c-.225.242-.5.433-.805.56-.358.16-.745.243-1.137.245ZM10.93 6.39a1.83 1.83 0 0 0 .333 1.155 1.198 1.198 0 0 0 1.837 0c.235-.338.35-.745.324-1.155a1.838 1.838 0 0 0-.324-1.164 1.199 1.199 0 0 0-1.837 0 1.838 1.838 0 0 0-.333 1.19V6.39Z" /><path d="M6.661 2.986v7.464L3.18 2.986H1.236v10.028h1.357V4.806l3.84 8.208h1.585V2.986H6.66Z" /><path d="M14.361 11.281V9.97H9.986v1.312h4.375Z" /></svg>;
};
export default IconNumeroSymbol;