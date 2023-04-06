import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconNumberSymbol = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--number-symbol", className, iconSize, "IconNumberSymbol");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="m13.18 6.049.184-1.295h-1.96l.472-3.247h-1.312l-.473 3.247H6.854l.472-3.247H6.022l-.48 3.247H3.545l-.184 1.295h2.013L4.806 9.95H2.82l-.184 1.295h1.96l-.472 3.246h1.312l.473-3.246h3.237l-.472 3.246h1.303l.482-3.246h1.995l.183-1.295h-2.012l.569-3.902h1.986ZM9.33 9.95H6.101L6.67 6.05h3.229L9.33 9.95Z" /></svg>;
};
export default IconNumberSymbol;