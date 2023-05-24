import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconHighContrast = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--high-contrast", className, iconSize, "IconHighContrast");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_3104_5201)"><path d="M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781Zm0 12.25A5.476 5.476 0 0 1 2.531 8c0-3.01 2.45-5.478 5.469-5.478a5.476 5.476 0 0 1 5.469 5.47A5.482 5.482 0 0 1 8 13.46v.009Z" /><path d="M3.844 8A4.16 4.16 0 0 0 8 12.156V3.835a4.16 4.16 0 0 0-4.156 4.156V8Z" /></g><defs><clipPath id="prefix__clip0_3104_5201"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconHighContrast;