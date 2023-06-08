import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconStarFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--star-filled-large", className, iconSize, "IconStarFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m24.601 29.029-8.199-4.279a.874.874 0 0 0-.813 0l-8.19 4.279 1.6-9.126a.875.875 0 0 0-.253-.77l-6.659-6.467 9.162-1.33a.874.874 0 0 0 .656-.48L16 2.56l4.095 8.295a.875.875 0 0 0 .656.481l9.161 1.33-6.623 6.467a.874.874 0 0 0-.254.77l1.566 9.126Z" /></svg>;
};
export default IconStarFilledLarge;