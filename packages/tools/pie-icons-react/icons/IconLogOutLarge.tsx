import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLogOutLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--log-out-large", className, iconSize, "IconLogOutLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M27.375 16.875a11.375 11.375 0 1 1-15.75-10.5v1.934a9.625 9.625 0 1 0 8.75 0V6.375a11.375 11.375 0 0 1 7 10.5Zm-10.5-14h-1.75v10.5h1.75v-10.5Z" /></svg>;
};
export default IconLogOutLarge;