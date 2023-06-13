import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronSplitLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chevron-split-large", className, iconSize, "IconChevronSplitLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m23.052 12.036-7.008-7.411h-.097l-7 7.402L7.68 10.83l7-7.412a1.916 1.916 0 0 1 2.625 0l7 7.412-1.252 1.207Z" /><path d="M8.947 19.973 16 27.375h.096l7-7.402 1.278 1.198-7 7.403a1.907 1.907 0 0 1-2.625 0l-7-7.412 1.198-1.19Z" /></svg>;
};
export default IconChevronSplitLarge;