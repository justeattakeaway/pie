import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLightning = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--lightning", className, iconSize, "IconLightning");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8.963 6.329V1.438H7.746L3.818 8.954a.875.875 0 0 0 .778 1.286H7.65v4.322h1.479l3.657-6.956a.876.876 0 0 0-.77-1.277H8.963Zm-3.65 2.625L7.65 4.5v2.266a.875.875 0 0 0 .875.875h2.765L8.963 12.07V9.802a.875.875 0 0 0-.875-.874l-2.774.026Z" /></svg>;
};
export default IconLightning;