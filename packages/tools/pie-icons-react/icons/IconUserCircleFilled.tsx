import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconUserCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--user-circle-filled", className, iconSize, "IconUserCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M8 7.37a1.12 1.12 0 1 0 0-2.24 1.12 1.12 0 0 0 0 2.24Z" /><path fill="#242E30" d="M8 1.438a6.562 6.562 0 0 0-4.944 10.876c.298.322.626.615.98.875a6.537 6.537 0 0 0 7.928 0c.352-.258.678-.551.971-.875A6.554 6.554 0 0 0 8 1.438Zm0 2.38A2.433 2.433 0 1 1 5.567 6.25 2.441 2.441 0 0 1 8 3.818Zm4.042 7.524c-.14.167-.288.324-.446.482a2.834 2.834 0 0 0-.516-.455 2.992 2.992 0 0 0-1.663-.49H6.582a2.992 2.992 0 0 0-1.662.49c-.19.13-.363.283-.516.455a7.637 7.637 0 0 1-.447-.482 5.84 5.84 0 0 1-.332-.533c.117-.123.243-.237.376-.341a4.235 4.235 0 0 1 2.625-.875h2.791a4.235 4.235 0 0 1 2.626.874c.133.105.259.219.376.342a5.814 5.814 0 0 1-.377.534Z" /></svg>;
};
export default IconUserCircleFilled;