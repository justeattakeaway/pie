import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCreditCardFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--credit-card-filled-large", className, iconSize, "IconCreditCardFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M2.875 13.813V23A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23v-9.188H2.875Zm9.625 6.562H7.25v-1.75h5.25v1.75Zm10.754.621a1.479 1.479 0 0 1-1.129-.516 1.496 1.496 0 1 1 0-1.96 1.497 1.497 0 1 1 1.129 2.476ZM2.875 11.188V9A2.625 2.625 0 0 1 5.5 6.375h21A2.625 2.625 0 0 1 29.125 9v2.188H2.875Z" /></svg>;
};
export default IconCreditCardFilledLarge;