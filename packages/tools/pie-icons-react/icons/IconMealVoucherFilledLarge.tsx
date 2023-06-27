import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconMealVoucherFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--meal-voucher-filled-large", className, size, "IconMealVoucherFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M29.125 12.5v11.375a1.75 1.75 0 0 1-1.75 1.75H4.625a1.75 1.75 0 0 1-1.75-1.75V12.5a1.75 1.75 0 0 1 1.75-1.75H7.18v.875c.006.296.047.59.123.875 0 .105.052.21.096.341 0 0 .079.219.105.263a4.839 4.839 0 0 0 1.942 2.371.928.928 0 0 1 .429.752v5.023a.875.875 0 0 0 .875.875h3.5a.875.875 0 0 0 .875-.875v-5.119a.873.873 0 0 1 .332-.674 3.133 3.133 0 0 0 2.39 2.415l.507.097a84.104 84.104 0 0 1-.158 2.257l-.079.954a.875.875 0 0 0 .875.945h3.5a.875.875 0 0 0 .875-.805l.07-.805c.15-1.855.36-5.88.35-9.765h3.588a1.749 1.749 0 0 1 1.75 1.75ZM9.07 12.342l.053.132a3.5 3.5 0 0 0 2.502 2.056v5.845h1.75v-5.88a3.5 3.5 0 0 0 2.354-1.995l.052-.131c0-.07.044-.131.061-.201.056-.182.085-.37.088-.56V5.045l-1.75.875v5.591a1.051 1.051 0 0 1-.053.289.437.437 0 0 1-.385.254.438.438 0 0 1-.437-.438V5.045l-1.75.875v5.705a.447.447 0 0 1-.438.438.437.437 0 0 1-.393-.254 1.05 1.05 0 0 1-.044-.289V5.045l-1.75.875v5.705c0 .19.026.378.079.56-.009.026.043.088.061.157Zm8.032 2.354A16.949 16.949 0 0 1 19.36 4.8a1.33 1.33 0 0 1 1.68-.543c.35.167.761.543.875 1.995.212 4.708.139 9.424-.219 14.123h-1.75c.07-.875.158-2.231.228-3.859-.648-.113-1.698-.297-1.969-.358a1.452 1.452 0 0 1-1.102-1.462Zm1.75-.192 1.392.245c.079-2.564.105-5.443 0-7.805a16.414 16.414 0 0 0-1.4 7.56h.008Z" /></svg>;
};
export default IconMealVoucherFilledLarge;