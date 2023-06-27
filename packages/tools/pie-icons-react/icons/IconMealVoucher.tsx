import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconMealVoucher = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--meal-voucher", className, size, "IconMealVoucher");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M14.781 6.688v5.25a1.094 1.094 0 0 1-1.094 1.093H2.313a1.093 1.093 0 0 1-1.094-1.093v-5.25a1.094 1.094 0 0 1 1.093-1.094h1.313v1.312H2.531v4.813H13.47V6.906h-1.094V5.594h1.313a1.094 1.094 0 0 1 1.093 1.094Zm-5.11 1.04.517.115c0 .76-.053 1.426-.08 1.907h1.05c.08-1.444.176-4.375.062-6.405 0-.586-.158-.875-.411-1.015a.648.648 0 0 0-.508-.061.761.761 0 0 0-.42.35 7.875 7.875 0 0 0-.761 4.314.779.779 0 0 0 .551.796Zm-3.946-.997v3.02h1.05V6.73c.446-.13.875-.428.875-.927V2.26l-2.853.289v3.255c.035.49.482.787.928.927Z" /></svg>;
};
export default IconMealVoucher;