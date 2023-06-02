import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconVoucherFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--voucher-filled", className, iconSize, "IconVoucherFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" fillRule="evenodd" d="M14.781 4.579v6.842l-1.61 1.61H2.83l-1.61-1.61V4.58l1.61-1.61H13.17l1.61 1.61ZM10.214 8A3.938 3.938 0 0 0 8 10.214 3.937 3.937 0 0 0 5.786 8 3.938 3.938 0 0 0 8 5.786 3.938 3.938 0 0 0 10.214 8Z" clipRule="evenodd" /></svg>;
};
export default IconVoucherFilled;