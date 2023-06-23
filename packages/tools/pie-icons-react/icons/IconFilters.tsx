import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFilters = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--filters", className, iconSize, "IconFilters");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M15 3.844v1.312H6.031v1.532H4.72V5.155H1V3.844h3.719V2.313H6.03v1.53H15Zm-3.719 5.469H9.97v1.53H1v1.313h8.969v1.531h1.312v-1.53H15v-1.313h-3.719V9.313Z" /></svg>;
};
export default IconFilters;