import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconAppOrderLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--app-order-large", className, iconSize, "IconAppOrderLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M9 4.625h3.22l.56 1.418h4.69l.56-1.418h3.22a.875.875 0 0 1 .875.875v1.75h1.75V5.5a2.625 2.625 0 0 0-2.625-2.625H9A2.625 2.625 0 0 0 6.375 5.5v21A2.625 2.625 0 0 0 9 29.125h1.75v-1.75H9a.875.875 0 0 1-.875-.875v-21A.875.875 0 0 1 9 4.625Z" /><path fill="#242E30" d="M18.205 21.25h4.34l1.33-1.251v-3.124h-1.75V19.5h-3.5v-2.625h-1.75v3.124l1.33 1.251Z" /><path fill="#242E30" d="M27.576 13.375h-3.701V10.75L22.204 9h-3.658l-1.671 1.75v2.625h-3.701L12.56 26.85a2.179 2.179 0 0 0 2.17 2.275H26.02a2.178 2.178 0 0 0 2.17-2.275l-.613-13.475Zm-8.951-2.625h3.5v2.625h-3.5V10.75Zm7.7 16.494a.418.418 0 0 1-.306.131H14.73a.42.42 0 0 1-.42-.446l.534-11.804h11.06l.534 11.804a.446.446 0 0 1-.114.315Z" /></svg>;
};
export default IconAppOrderLarge;