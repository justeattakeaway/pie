import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconRestaurant = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--restaurant", className, iconSize, "IconRestaurant");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m13.863 3.485-1.19-1.015a1.487 1.487 0 0 0-.998-.376H4.351c-.365 0-.719.13-.997.367L2.155 3.485a2.572 2.572 0 0 0-.936 1.943 2.511 2.511 0 0 0 .875 1.88v6.598h11.812V7.31a2.518 2.518 0 0 0 .875-1.881 2.623 2.623 0 0 0-.918-1.943Zm-5.05 9.109H7.187v-1.216a.814.814 0 0 1 1.628 0v1.216Zm3.78 0h-2.467v-1.216a2.126 2.126 0 0 0-4.252 0v1.216H3.406V8a3.167 3.167 0 0 0 2.625-.621 3.132 3.132 0 0 0 3.903 0A3.167 3.167 0 0 0 12.559 8h.043l-.008 4.594Zm-.297-5.889a1.75 1.75 0 0 1-1.793-.656H9.4A1.654 1.654 0 0 1 8 6.74a1.654 1.654 0 0 1-1.4-.691H5.497a1.75 1.75 0 0 1-1.75.656 1.383 1.383 0 0 1-1.216-1.277 1.243 1.243 0 0 1 .473-.928L4.21 3.459a.201.201 0 0 1 .14-.053h7.324a.201.201 0 0 1 .14.053l1.19 1.041a1.26 1.26 0 0 1 .464.945 1.383 1.383 0 0 1-1.173 1.26Z" /></svg>;
};
export default IconRestaurant;