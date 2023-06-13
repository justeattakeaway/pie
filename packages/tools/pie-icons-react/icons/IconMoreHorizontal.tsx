import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconMoreHorizontal = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--more-horizontal", className, iconSize, "IconMoreHorizontal");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M3.188 6.688a1.313 1.313 0 1 1 0 2.625 1.313 1.313 0 0 1 0-2.626ZM6.688 8a1.313 1.313 0 1 0 2.625 0 1.313 1.313 0 0 0-2.626 0ZM11.5 8a1.313 1.313 0 1 0 2.625 0A1.313 1.313 0 0 0 11.5 8Z" /></svg>;
};
export default IconMoreHorizontal;