import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconStarLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--star-large", className, iconSize, "IconStarLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m24.601 29.029-8.199-4.279a.874.874 0 0 0-.813 0l-8.19 4.279 1.6-9.126a.875.875 0 0 0-.253-.77l-6.659-6.467 9.162-1.33a.875.875 0 0 0 .656-.48L16 2.56l4.095 8.295a.875.875 0 0 0 .656.481l9.161 1.33-6.623 6.467a.874.874 0 0 0-.254.77l1.566 9.126ZM16 22.904c.426-.002.847.1 1.225.297l5.049 2.625-.963-5.626a2.624 2.624 0 0 1 .753-2.327l4.086-3.982-5.644-.822a2.624 2.624 0 0 1-1.977-1.444l-2.53-5.11-2.528 5.11a2.625 2.625 0 0 1-1.977 1.435l-5.644.823 4.086 3.98a2.625 2.625 0 0 1 .753 2.328l-.963 5.627 5.049-2.625A2.625 2.625 0 0 1 16 22.869v.035Z" /></svg>;
};
export default IconStarLarge;