import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconSwissFancLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--swiss-fanc-large", className, iconSize, "IconSwissFancLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21ZM8.825 15.659a1.89 1.89 0 0 0 1.838 1.977 2.022 2.022 0 0 0 1.426-.569l.061-.07.98.99-.061.06a3.185 3.185 0 0 1-2.398.99A3.288 3.288 0 0 1 7.25 15.65a3.29 3.29 0 0 1 3.404-3.386 3.246 3.246 0 0 1 2.397.98l.062.061-.963.989-.061-.044a1.97 1.97 0 0 0-1.435-.569 1.872 1.872 0 0 0-1.829 1.978Zm9.17-3.282H19.5v6.537h-1.505v-2.625H15.37v2.625h-1.505v-6.537h1.522v2.547h2.625l-.017-2.546Zm4.226 1.33v1.488h2.398v1.33H22.22v2.389h-1.514v-6.537h4.043v1.33h-2.529Z" /></svg>;
};
export default IconSwissFancLarge;