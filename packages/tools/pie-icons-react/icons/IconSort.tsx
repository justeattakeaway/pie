import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSort = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--sort", className, iconSize, "IconSort");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M9.75 11.719h-3.5v1.312h3.5V11.72Z" /><path fill="#242E30" d="M12.375 7.344h-8.75v1.312h8.75V7.344Z" /><path fill="#242E30" d="M15 2.969H1V4.28h14V2.97Z" /></svg>;
};
export default IconSort;