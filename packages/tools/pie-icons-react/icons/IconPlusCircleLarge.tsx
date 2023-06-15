import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPlusCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--plus-circle-large", className, iconSize, "IconPlusCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16.875 9.814h-1.75v5.311H9.814v1.75h5.311v5.311h1.75v-5.311h5.311v-1.75h-5.31V9.814Z" /><path d="M24.663 7.338A12.25 12.25 0 1 0 7.339 24.663 12.25 12.25 0 0 0 24.663 7.338Zm-1.234 16.09A10.5 10.5 0 1 1 8.605 8.555 10.5 10.5 0 0 1 23.43 23.43Z" /></svg>;
};
export default IconPlusCircleLarge;