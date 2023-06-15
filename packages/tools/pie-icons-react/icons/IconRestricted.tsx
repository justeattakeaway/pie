import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconRestricted = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--restricted", className, iconSize, "IconRestricted");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219ZM2.531 8A5.469 5.469 0 0 1 8 2.531a5.408 5.408 0 0 1 3.369 1.173l-7.665 7.665A5.408 5.408 0 0 1 2.53 8ZM8 13.469a5.408 5.408 0 0 1-3.369-1.173l7.665-7.665A5.408 5.408 0 0 1 13.47 8 5.47 5.47 0 0 1 8 13.469Z" /></svg>;
};
export default IconRestricted;