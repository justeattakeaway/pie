import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronUpLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chevron-up-large", className, iconSize, "IconChevronUpLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M26.124 22.125 16 11.625h-.096l-10.028 10.5-1.251-1.234 10.063-10.5a1.916 1.916 0 0 1 2.624 0L27.376 20.91l-1.251 1.216Z" /></svg>;
};
export default IconChevronUpLarge;