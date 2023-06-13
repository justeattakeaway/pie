import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLocationPinRestaurant = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--location-pin-restaurant", className, iconSize, "IconLocationPinRestaurant");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_3_53)"><path d="m8 12.436 3.29-3.325a4.734 4.734 0 0 0 0-6.624 4.602 4.602 0 0 0-6.58 0 4.734 4.734 0 0 0 0 6.624L8 12.436Zm-2.354-9.03a3.299 3.299 0 0 1 4.708 0 3.404 3.404 0 0 1 0 4.778L8 10.564l-2.354-2.38a3.404 3.404 0 0 1 0-4.778ZM4.5 13.47h7v1.312h-7V13.47Z" /></g><defs><clipPath id="prefix__clip0_3_53"><rect width={16} height={16} /></clipPath></defs></svg>;
};
export default IconLocationPinRestaurant;