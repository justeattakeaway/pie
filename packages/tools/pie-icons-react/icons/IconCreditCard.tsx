import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCreditCard = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--credit-card", className, iconSize, "IconCreditCard");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M3.625 9.094H6.25v1.312H3.625V9.094ZM14.781 4.5v7a1.54 1.54 0 0 1-1.531 1.531H2.75A1.54 1.54 0 0 1 1.219 11.5v-7A1.54 1.54 0 0 1 2.75 2.969h10.5A1.54 1.54 0 0 1 14.781 4.5Zm-12.25 0v1.094H13.47V4.5a.219.219 0 0 0-.219-.219H2.75a.219.219 0 0 0-.219.219Zm10.938 7V6.906H2.53V11.5a.219.219 0 0 0 .219.219h10.5a.219.219 0 0 0 .219-.219Z" /></svg>;
};
export default IconCreditCard;