import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPercentage = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--percentage", className, iconSize, "IconPercentage");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_15_528)"><path d="M10.835 2.75 3.58 13.25h1.593l7.262-10.5h-1.601Z" /><path d="M12.375 7.869a2.625 2.625 0 0 0-2.625 2.756 2.625 2.625 0 0 0 5.25 0 2.625 2.625 0 0 0-2.625-2.756Zm0 4.2a1.313 1.313 0 0 1-1.348-1.444 1.313 1.313 0 0 1 2.625 0 1.313 1.313 0 0 1-1.277 1.444Z" /><path d="M6.197 5.375a2.625 2.625 0 0 0-2.572-2.756A2.625 2.625 0 0 0 1 5.375a2.625 2.625 0 0 0 2.625 2.756 2.625 2.625 0 0 0 2.572-2.756Zm-3.92 0a1.313 1.313 0 1 1 2.625 0 1.313 1.313 0 0 1-2.625 0Z" /></g><defs><clipPath id="prefix__clip0_15_528"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconPercentage;