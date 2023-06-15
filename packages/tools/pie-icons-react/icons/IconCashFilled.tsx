import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCashFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--cash-filled", className, iconSize, "IconCashFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M2.75 9.75h9.625v1.75H1V5.375h1.75V9.75Zm12.031-6.729v5.583H3.844V3.02H14.78ZM10.53 5.812a1.217 1.217 0 1 0-2.433 0 1.217 1.217 0 0 0 2.433 0Z" /></svg>;
};
export default IconCashFilled;