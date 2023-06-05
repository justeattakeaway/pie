import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconDashboard = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--dashboard", className, iconSize, "IconDashboard");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M14.781 9.75c-.001.9-.18 1.793-.525 2.625h-1.461a5.435 5.435 0 0 0 .306-4.585l.945-1.085a6.71 6.71 0 0 1 .735 3.045ZM8 4.281c.845 0 1.678.198 2.432.578l.875-1.015A6.773 6.773 0 0 0 1.22 9.75c.001.9.18 1.793.525 2.625h1.461A5.469 5.469 0 0 1 8 4.281Zm2.012 5.031a2.406 2.406 0 1 1-.988-.875L13.25 3.67l.989.875-4.227 4.768Zm-1.242.543a1.076 1.076 0 0 0-1.54 0 1.085 1.085 0 1 0 1.54 0Z" /></svg>;
};
export default IconDashboard;