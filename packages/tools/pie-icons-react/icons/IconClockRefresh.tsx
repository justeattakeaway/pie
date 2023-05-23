import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconClockRefresh = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--clock-refresh", className, iconSize, "IconClockRefresh");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8 14.781V13.47a5.486 5.486 0 1 0-4.812-2.949l.936-.945.464 3.623-3.404-.683L2.225 11.5A6.711 6.711 0 0 1 1.254 8 6.781 6.781 0 1 1 8 14.781Z" /><path fill="#242E30" d="m10.013 10.905-2.95-1.768V5.095h1.313v3.299l2.31 1.391-.673 1.12Z" /></svg>;
};
export default IconClockRefresh;