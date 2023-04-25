import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconHeart = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--heart", className, iconSize, "IconHeart");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M8 14.195 2.234 8.263a3.745 3.745 0 0 1 0-5.128 3.413 3.413 0 0 1 4.9 0l.875.875.875-.875a3.421 3.421 0 0 1 4.909 0 3.754 3.754 0 0 1 0 5.128L8 14.195ZM4.675 3.406a2.082 2.082 0 0 0-1.514.648 2.432 2.432 0 0 0 0 3.29l4.84 4.961 4.838-4.97a2.432 2.432 0 0 0 0-3.281 2.135 2.135 0 0 0-3.045 0L8.735 5.086a1.103 1.103 0 0 1-1.531 0L6.189 4.054a2.1 2.1 0 0 0-1.514-.648Z" /></svg>;
};
export default IconHeart;