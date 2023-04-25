import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconPaymentBitcoin = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--bitcoin", className, iconSize, "IconPaymentBitcoin");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><g fill="#F7931A" clipPath="url(#prefix__clip0_16_63)"><path d="M7.904 6.154 7.57 7.5c.377.097 1.96.482 2.153-.28.192-.761-1.435-.971-1.82-1.067Z" /><path d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm2.826 6.02a1.077 1.077 0 0 1-.875.988 1.19 1.19 0 0 1 .674 1.637c-.367 1.041-1.076 1.172-2.231.954l-.315 1.12-.823-.21.271-1.103-.533-.14-.28 1.111-.875-.21.28-1.12-.315-.087-.875-.219.341-.77.49.123a.245.245 0 0 0 .306-.167l.447-1.75.314-1.26a.367.367 0 0 0-.314-.394l-.49-.122.227-.744.875.228.263.061.314-1.103.876.21-.307 1.103.534.131.271-1.085.832.21-.28 1.094c.857.298 1.32.691 1.198 1.514Z" /><path d="M7.396 8.184 7.03 9.67c.455.114 2.275.569 2.485-.271.21-.84-1.654-1.103-2.118-1.216Z" /></g><defs><clipPath id="prefix__clip0_16_63"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconPaymentBitcoin;