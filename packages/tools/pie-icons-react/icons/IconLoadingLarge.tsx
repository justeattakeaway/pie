import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLoadingLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--loading-large", className, iconSize, "IconLoadingLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M28.25 16A12.25 12.25 0 1 1 16 3.75V5.5A10.5 10.5 0 1 0 26.5 16h1.75ZM9 16h1.75A5.25 5.25 0 1 1 16 21.25V23a7 7 0 1 0-7-7Z" /></svg>;
};
export default IconLoadingLarge;