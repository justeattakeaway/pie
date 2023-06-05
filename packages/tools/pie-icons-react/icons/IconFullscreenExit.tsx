import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFullscreenExit = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--fullscreen-exit", className, iconSize, "IconFullscreenExit");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M6.031 1.123 4.72 1.86V4.72H1.766L1.109 6.03h4.922V1.123Z" /><path fill="#242E30" d="m9.969 1.11 1.312.656v2.953h2.859l.737 1.312H9.97V1.11Z" /><path fill="#242E30" d="m14.89 9.969-.656 1.312h-2.953v2.859l-1.312.737V9.97h4.922Z" /><path fill="#242E30" d="m1.123 9.969.737 1.312H4.72v2.953l1.312.657V9.969H1.123Z" /></svg>;
};
export default IconFullscreenExit;