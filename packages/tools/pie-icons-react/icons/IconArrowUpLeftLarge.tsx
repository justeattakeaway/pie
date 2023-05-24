import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconArrowUpLeftLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--arrow-up-left-large", className, iconSize, "IconArrowUpLeftLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M25.284 24.041 9.814 8.571h9.922v-1.75H8.58a1.75 1.75 0 0 0-1.75 1.75v11.165h1.75V9.805l15.47 15.47 1.234-1.234Z" /></svg>;
};
export default IconArrowUpLeftLarge;