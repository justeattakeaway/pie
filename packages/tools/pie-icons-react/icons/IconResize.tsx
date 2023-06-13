import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconResize = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--resize", className, iconSize, "IconResize");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M.928 10.325h.927l8.47-8.47V.928L.928 10.325Z" /><path d="M10.325.928V0L0 10.325h.928L10.325.928Z" /><path d="m6.501 10.325 3.824-3.824v-.927l-4.751 4.751H6.5Z" /><path d="M7.429 10.325h-.928l3.824-3.824v.928L7.43 10.325Z" /></svg>;
};
export default IconResize;