import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconDrink = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--drink", className, iconSize, "IconDrink");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M12.375 4.719H8.656V3.222l2.179-.726-.42-1.242-3.071 1.023V4.72H3.625V6.03h.586l.665 7.359a1.531 1.531 0 0 0 1.531 1.391h3.185a1.53 1.53 0 0 0 1.532-1.391l.665-7.359h.586V4.72ZM9.811 13.25a.219.219 0 0 1-.219.201H6.407a.22.22 0 0 1-.218-.201l-.665-7.219h4.952l-.665 7.219Z" /></svg>;
};
export default IconDrink;