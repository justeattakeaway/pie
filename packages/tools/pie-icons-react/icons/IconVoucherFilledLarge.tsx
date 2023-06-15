import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconVoucherFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--voucher-filled-large", className, iconSize, "IconVoucherFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path fillRule="evenodd" d="M5.641 5.5h20.843l3.141 3.141V23.36L26.484 26.5H5.64L2.5 23.359V8.64L5.641 5.5ZM22.75 9.875h1.75v-3.5h-1.75v3.5Zm-6.396 3.77a6.922 6.922 0 0 0 2.345 1.541.875.875 0 0 1 0 1.628 6.919 6.919 0 0 0-3.885 3.885.875.875 0 0 1-1.628 0 6.92 6.92 0 0 0-3.885-3.885.875.875 0 0 1 0-1.628 6.922 6.922 0 0 0 3.885-3.885.875.875 0 0 1 1.628 0 6.922 6.922 0 0 0 1.54 2.345Zm6.396 8.48h1.75v3.5h-1.75v-3.5Zm1.75-5.25h-1.75v3.5h1.75v-3.5Zm-1.75-5.25h1.75v3.5h-1.75v-3.5Z" clipRule="evenodd" /><path d="M11.515 16A8.62 8.62 0 0 1 14 18.485 8.62 8.62 0 0 1 16.485 16 8.62 8.62 0 0 1 14 13.515 8.62 8.62 0 0 1 11.515 16Z" /></svg>;
};
export default IconVoucherFilledLarge;