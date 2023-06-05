import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGeolocation = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--geolocation", className, iconSize, "IconGeolocation");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M9.452 14.466H8.044l-.534-2.091A5.25 5.25 0 0 0 3.669 8.49L1.534 8V6.547l11.882-3.963-3.964 11.882ZM3.81 7.17h.175a6.598 6.598 0 0 1 4.803 4.847v.175l2.503-7.525L3.809 7.17Z" /></svg>;
};
export default IconGeolocation;