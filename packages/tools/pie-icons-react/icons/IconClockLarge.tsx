import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconClockLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--clock-large", className, iconSize, "IconClockLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m20.795 20.253-5.67-3.404V9h1.75v6.851l4.83 2.896-.91 1.506Z" /><path d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z" /></svg>;
};
export default IconClockLarge;