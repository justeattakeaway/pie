import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconVoucher = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--voucher", className, iconSize, "IconVoucher");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M10.214 8A3.938 3.938 0 0 0 8 10.214 3.938 3.938 0 0 0 5.786 8 3.937 3.937 0 0 0 8 5.786 3.937 3.937 0 0 0 10.214 8Zm4.567-3.421v6.842l-1.61 1.61H2.83l-1.61-1.61V4.58l1.61-1.61H13.17l1.61 1.61Zm-1.312.551-.875-.875H3.38l-.875.875v5.74l.875.875h9.24l.875-.875-.026-5.74Z" /></svg>;
};
export default IconVoucher;