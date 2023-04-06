import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconDeliveryFee = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--delivery-fee", className, iconSize, "IconDeliveryFee");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_18_2472)"><path fill="#242E30" d="M13.127 1.735 7.8 3.686 4.64 10.502l7.28 3.37 3.159-6.808-1.952-5.329Zm-2.065 9.818L6.96 9.645l2.117-4.568 3.01-1.102 1.103 3.01-2.127 4.567ZM1.876 6.25H4.5V8H1.875V6.25ZM6.031 4.5H1V2.75h5.031V4.5Z" /></g><defs><clipPath id="prefix__clip0_18_2472"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconDeliveryFee;