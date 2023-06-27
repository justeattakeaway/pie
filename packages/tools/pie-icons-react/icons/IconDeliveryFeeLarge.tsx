import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconDeliveryFeeLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--delivery-fee-large", className, size, "IconDeliveryFeeLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M25.424 4.45 15.326 8.125 9.15 21.477l13.799 6.388 6.177-13.326-3.701-10.09Zm-3.299 21.096L11.476 20.63l5.136-11.087 7.77-2.852 2.853 7.77-5.11 11.086ZM9.875 15.125H5.5v-1.75h4.375v1.75Zm1.75-4.375h-8.75V9h8.75v1.75Zm12.25.438a1.312 1.312 0 1 1-2.625 0 1.312 1.312 0 0 1 2.625 0Z" /></svg>;
};
export default IconDeliveryFeeLarge;