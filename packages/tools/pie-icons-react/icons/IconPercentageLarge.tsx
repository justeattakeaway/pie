import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPercentageLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--percentage-large", className, size, "IconPercentageLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M23 16c-3.001 0-4.375 2.494-4.375 4.813 0 2.318 1.374 4.812 4.375 4.812s4.375-2.494 4.375-4.813C27.375 18.494 26.01 16 23 16Zm0 7.875c-2.555 0-2.625-2.747-2.625-3.063 0-.315.07-3.062 2.625-3.062s2.625 2.747 2.625 3.063c0 .315-.07 3.062-2.625 3.062Z" /><path d="M22.16 6.375 7.766 25.625h2.188l14.393-19.25H22.16Z" /><path d="M9 16c3.01 0 4.375-2.494 4.375-4.813 0-2.318-1.365-4.812-4.375-4.812s-4.375 2.494-4.375 4.813C4.625 13.505 5.999 16 9 16Zm0-7.875c2.555 0 2.625 2.748 2.625 3.063 0 .314-.07 3.062-2.625 3.062s-2.625-2.748-2.625-3.063c0-.314.07-3.062 2.625-3.062Z" /></svg>;
};
export default IconPercentageLarge;