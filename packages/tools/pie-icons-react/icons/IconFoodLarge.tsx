import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconFoodLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--food-large", className, iconSize, "IconFoodLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M4.135 21.723A3.299 3.299 0 0 0 2 20.995v-1.75a5.023 5.023 0 0 1 3.106 1.024 3.333 3.333 0 0 0 2.144.726 3.343 3.343 0 0 0 2.144-.726 5.023 5.023 0 0 1 3.106-1.024 5.032 5.032 0 0 1 3.115 1.024 3.5 3.5 0 0 0 4.279 0A5.075 5.075 0 0 1 23 19.246v1.75a3.343 3.343 0 0 0-2.144.727 5.25 5.25 0 0 1-6.221 0 3.343 3.343 0 0 0-2.135-.727 3.335 3.335 0 0 0-2.135.727 5.031 5.031 0 0 1-3.115 1.023 5.022 5.022 0 0 1-3.115-1.023ZM23.919 6.374V2h-5.25v1.75h3.5v2.625h-6.23l.761 6.851a11.954 11.954 0 0 0-4.2-.726c-4.375 0-8.024 2.196-8.654 5.25l1.75.35c.447-2.17 3.492-3.85 6.904-3.85s6.457 1.627 6.939 3.789l1.75-.377a5.82 5.82 0 0 0-2.625-3.5l-.674-6.037h10.185l-1.523 16.704a.875.875 0 0 1-.875.796h-4.584c.14-.573.208-1.16.2-1.75h-1.75c0 2.301-.314 3.5-7 3.5-6.684 0-7-1.199-7-3.5h-1.75c0 4.462 2.818 5.25 8.75 5.25 3.807 0 6.327-.332 7.648-1.75h5.495a2.625 2.625 0 0 0 2.625-2.389L30 6.375h-6.081Z" /></svg>;
};
export default IconFoodLarge;