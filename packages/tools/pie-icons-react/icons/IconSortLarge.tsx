import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSortLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--sort-large", className, iconSize, "IconSortLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M18.625 20.125h-5.25v1.75h5.25v-1.75Z" /><path d="M5.5 6.375v1.75h22.75v-1.75H5.5Z" /><path d="M5.5 6.375H3.75v1.75H5.5v-1.75Z" /><path d="M23 13.25H9V15h14v-1.75Z" /></svg>;
};
export default IconSortLarge;