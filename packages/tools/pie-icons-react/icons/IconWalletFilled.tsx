import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconWalletFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--wallet-filled", className, iconSize, "IconWalletFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m9.75 3.065-.263-.735a1.531 1.531 0 0 0-1.995-.831L3.73 3.065h6.02Z" /><path fill="#242E30" d="M10.397 11.325a.394.394 0 0 1-.394-.394v-3.15c.001-.075.025-.149.07-.21a.385.385 0 0 1 .298-.184h3.115V5.91a1.531 1.531 0 0 0-1.531-1.532h-8.97a1.549 1.549 0 0 0-.664.123 1.496 1.496 0 0 0-.761.875c-.071.169-.107.35-.105.534v7a1.54 1.54 0 0 0 1.53 1.531h8.97a1.54 1.54 0 0 0 1.53-1.531v-1.584h-3.088Z" /><path fill="#242E30" d="M11.316 8.7v1.304h3.019V8.7h-3.02Z" /></svg>;
};
export default IconWalletFilled;