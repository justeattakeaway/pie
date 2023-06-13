import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronRightLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chevron-right-large", className, iconSize, "IconChevronRightLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M10.2 26.124 20.7 16a.43.43 0 0 0 0-.096L10.2 5.876l1.234-1.251 10.5 10.063a1.917 1.917 0 0 1 0 2.624L11.416 27.376 10.2 26.124Z" /></svg>;
};
export default IconChevronRightLarge;