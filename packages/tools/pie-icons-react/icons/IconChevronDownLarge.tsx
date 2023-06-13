import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronDownLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chevron-down-large", className, iconSize, "IconChevronDownLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M5.876 9.875 16 20.375h.096l10.028-10.5 1.251 1.234-10.063 10.5a1.916 1.916 0 0 1-2.625 0L4.626 11.09l1.251-1.216Z" /></svg>;
};
export default IconChevronDownLarge;