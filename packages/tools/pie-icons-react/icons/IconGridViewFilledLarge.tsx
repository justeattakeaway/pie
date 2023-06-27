import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGridViewFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--grid-view-filled-large", className, size, "IconGridViewFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M4.625 14.25h9.625V4.625H4.625v9.625Z" /><path d="M17.75 14.25h9.625V4.625H17.75v9.625Z" /><path d="M4.625 27.375h9.625V17.75H4.625v9.625Z" /><path d="M17.75 27.375h9.625V17.75H17.75v9.625Z" /></svg>;
};
export default IconGridViewFilledLarge;