import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconWifi = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--wifi", className, iconSize, "IconWifi");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_15_321)"><path d="M11.832 10.231A5.023 5.023 0 0 0 8 8.333a5.023 5.023 0 0 0-3.833 1.898l-1.006-.875A6.326 6.326 0 0 1 8 7.02a6.326 6.326 0 0 1 4.839 2.363l-1.007.848Z" /><path d="M13.95 8.096A7.788 7.788 0 0 0 8 5.156a7.787 7.787 0 0 0-5.95 2.94l-1.006-.875a9.074 9.074 0 0 1 7-3.412 9.074 9.074 0 0 1 7 3.412l-1.094.875Z" /><path d="M9.794 12.576a2.292 2.292 0 0 0-3.588 0L5.2 11.701A3.666 3.666 0 0 1 8 10.354a3.665 3.665 0 0 1 2.8 1.373l-1.006.85Z" /></g><defs><clipPath id="prefix__clip0_15_321"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconWifi;