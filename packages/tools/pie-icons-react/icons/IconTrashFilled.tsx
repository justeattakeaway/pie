import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconTrashFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--trash-filled", className, iconSize, "IconTrashFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M9.864 1.219H6.136L5.49 2.53h5.022L9.864 1.22Z" /><path fill="#242E30" d="M1.875 3.844v1.312h.962l.788 8.243a1.531 1.531 0 0 0 1.522 1.382h5.723a1.53 1.53 0 0 0 1.505-1.382l.779-8.243h.971V3.844H1.875Z" /></svg>;
};
export default IconTrashFilled;