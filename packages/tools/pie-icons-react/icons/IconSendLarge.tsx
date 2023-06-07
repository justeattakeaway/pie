import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSendLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--send-large", className, iconSize, "IconSendLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M25.705 7.315a1.155 1.155 0 0 0-1.08-1.05 1.08 1.08 0 0 0-.488.052L5.5 12.43a1.178 1.178 0 0 0-.75 1.072 1.208 1.208 0 0 0 .75 1.118l3.75 1.552V22h6l2.108 4.59a1.2 1.2 0 0 0 1.064.652h.053a1.207 1.207 0 0 0 1.065-.795L25.645 7.87a1.17 1.17 0 0 0 .06-.555Zm-3.51 1.222-8.445 7.868-6.885-2.843 15.33-5.025ZM10.75 20.5v-3.705l1.785.75.832.345.3.652.908 1.958H10.75Zm7.628 4.71-3.556-7.763 8.783-8.197-5.227 15.96Z" /></svg>;
};
export default IconSendLarge;