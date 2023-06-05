import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronLeftLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chevron-left-large", className, iconSize, "IconChevronLeftLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M21.804 5.876 11.304 16a.43.43 0 0 0 0 .096l10.5 10.063-1.234 1.216-10.5-10.063a1.917 1.917 0 0 1 0-2.625L20.587 4.626l1.217 1.251Z" /></svg>;
};
export default IconChevronLeftLarge;