import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGridView = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--grid-view", className, iconSize, "IconGridView");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M6.906 6.906H2.094V2.094h4.812v4.812Zm-3.5-1.312h2.188V3.406H3.406v2.188Zm10.5 1.312H9.094V2.094h4.812v4.812Zm-3.5-1.312h2.188V3.406h-2.188v2.188Zm-3.5 8.312H2.094V9.094h4.812v4.812Zm-3.5-1.312h2.188v-2.188H3.406v2.188Zm10.5 1.312H9.094V9.094h4.812v4.812Zm-3.5-1.312h2.188v-2.188h-2.188v2.188Z" /></svg>;
};
export default IconGridView;