import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFullscreenExitLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--fullscreen-exit-large", className, iconSize, "IconFullscreenExitLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m21.25 4.188-1.75-.875V12.5h9.132l-.986-1.75H21.25V4.187Z" /><path fill="#242E30" d="m4.354 21.25-.986-1.75H12.5v9.188l-1.75-.875V21.25H4.354Z" /><path fill="#242E30" d="m28.688 19.5-.875 1.75H21.25v6.396l-1.75.986V19.5h9.188Z" /><path fill="#242E30" d="m10.75 4.354 1.75-.986V12.5H3.312l.876-1.75h6.562V4.354Z" /></svg>;
};
export default IconFullscreenExitLarge;