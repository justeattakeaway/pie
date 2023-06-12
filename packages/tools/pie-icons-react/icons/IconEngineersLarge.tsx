import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconEngineersLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--engineers-large", className, iconSize, "IconEngineersLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M25.24 18.651V7.547a2.793 2.793 0 0 0-2.791-2.79H9.55a2.793 2.793 0 0 0-2.791 2.79v11.104l-3.386 3.212v1.933a2.793 2.793 0 0 0 2.79 2.791h19.67a2.793 2.793 0 0 0 2.792-2.79v-1.934L25.24 18.65ZM9.55 6.506H22.44c.577 0 1.041.473 1.041 1.041v10.605H8.51V7.547c0-.577.472-1.04 1.041-1.04Zm17.325 17.29c0 .578-.473 1.041-1.041 1.041H6.165a1.044 1.044 0 0 1-1.041-1.04v-1.182l2.86-2.712h16.03l2.862 2.712v1.181Z" /><path d="m13.427 13.217-.945-.936.945-.945-1.242-1.242-2.179 2.187 2.179 2.179 1.242-1.243Z" /><path d="m19.517 12.281-.945.936 1.243 1.243 2.178-2.179-2.178-2.187-1.243 1.242.945.945Z" /><path d="M13.27 15.58h1.986l3.334-6.169h-1.995L13.27 15.58Z" /><path d="m13.559 21.372-.7 1.75h6.282l-.7-1.75h-4.882Z" /></svg>;
};
export default IconEngineersLarge;