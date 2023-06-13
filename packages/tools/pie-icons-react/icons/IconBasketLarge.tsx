import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBasketLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--basket-large", className, iconSize, "IconBasketLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16.875 15.125h-1.75v7h1.75v-7Z" /><path d="m12.518 22.125-.858-7H9.875l.875 7h1.768Z" /><path d="m21.88 9.875-1.75-5.25h-1.846l1.75 5.25h-8.068l1.75-5.25H11.87l-1.75 5.25H2v1.75h1.873L5.84 25.126a2.625 2.625 0 0 0 2.625 2.249H23.56a2.625 2.625 0 0 0 2.625-2.249l1.943-13.501H30v-1.75h-8.12Zm2.546 14.997a.875.875 0 0 1-.875.753H8.44a.875.875 0 0 1-.875-.753L5.64 11.625h20.72l-1.934 13.247Z" /><path d="m20.358 15.125-.85 7h1.76l.857-7h-1.767Z" /></svg>;
};
export default IconBasketLarge;