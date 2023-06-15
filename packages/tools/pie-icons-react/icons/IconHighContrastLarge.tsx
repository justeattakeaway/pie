import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconHighContrastLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--high-contrast-large", className, iconSize, "IconHighContrastLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 3.75C9.245 3.75 3.75 9.245 3.75 16S9.245 28.25 16 28.25 28.25 22.755 28.25 16 22.755 3.75 16 3.75Zm0 22.759c-5.793 0-10.509-4.716-10.509-10.509S10.207 5.491 16 5.491 26.509 10.207 26.509 16 21.793 26.509 16 26.509Z" /><path d="M7.241 16c0 4.83 3.929 8.759 8.759 8.759V7.24c-4.83 0-8.759 3.929-8.759 8.759Z" /></svg>;
};
export default IconHighContrastLarge;