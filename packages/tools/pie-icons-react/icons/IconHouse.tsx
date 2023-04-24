import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconHouse = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--house", className, iconSize, "IconHouse");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_15_1251)"><path fill="#242E30" d="M15.044 8.07c-.158-.166-3.815-4.174-6.125-5.722a1.75 1.75 0 0 0-1.794.008C4.771 3.896 1.114 7.904 1 8.07l.971.875 1.042-1.102v6.055h10.062V7.85c.613.648 1.024 1.094 1.041 1.103l.928-.884Zm-6.169 4.524v-1.969a.875.875 0 1 0-1.75 0v1.969H4.281V6.52a28.148 28.148 0 0 1 3.5-3.062.429.429 0 0 1 .385 0 28.33 28.33 0 0 1 3.5 3.071v6.073l-2.791-.01Z" /></g><defs><clipPath id="prefix__clip0_15_1251"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconHouse;