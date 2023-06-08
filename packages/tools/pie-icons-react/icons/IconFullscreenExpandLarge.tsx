import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFullscreenExpandLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--fullscreen-expand-large", className, iconSize, "IconFullscreenExpandLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M5.5 5.375h8.583l-.983 1.75H7.25v5.85l-1.75.983V5.375Z" /><path d="M18.9 7.125h5.85v5.848l1.75.981V5.375h-8.583l.983 1.75Z" /><path d="M26.5 26.375h-8.58l.982-1.75h5.848v-5.848l1.75-.982v8.58Z" /><path d="M5.5 26.375v-8.583l1.75.983v5.85h5.848l.981 1.75H5.5Z" /></svg>;
};
export default IconFullscreenExpandLarge;