import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPauseCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--pause-circle-filled-large", className, size, "IconPauseCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5ZM14.25 20.2H12.5v-8.4h1.75v8.4Zm5.25 0h-1.75v-8.4h1.75v8.4Z" /></svg>;
};
export default IconPauseCircleFilledLarge;