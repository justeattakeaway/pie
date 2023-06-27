import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconMoonLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--moon-large", className, size, "IconMoonLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M15.125 16a8.794 8.794 0 0 1 6.93-8.558 10.612 10.612 0 0 0-.805-.524 10.213 10.213 0 0 0-1.321-.64A10.317 10.317 0 0 0 16 5.5a10.5 10.5 0 1 0 0 21c1.348 0 2.683-.265 3.929-.779.455-.18.897-.394 1.321-.639.28-.166.551-.34.805-.524A8.793 8.793 0 0 1 15.125 16ZM16 24.75a8.75 8.75 0 1 1 1.811-17.308 10.5 10.5 0 0 0 0 17.116A8.834 8.834 0 0 1 16 24.75Z" /></svg>;
};
export default IconMoonLarge;