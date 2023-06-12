import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconClockAddLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--clock-add-large", className, iconSize, "IconClockAddLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m20.795 20.253-5.67-3.404V9h1.75v6.851l4.83 2.896-.91 1.506Z" /><path d="M16 3.75A12.25 12.25 0 0 0 4.266 19.5h1.847A10.325 10.325 0 0 1 5.5 16 10.5 10.5 0 1 1 16 26.5a10.299 10.299 0 0 1-4.375-.971v1.898A12.25 12.25 0 1 0 16 3.75Z" /><path d="M10.094 21.049v-3.736h-1.75v3.718H4.625v1.75l3.719-.017V26.5h1.75v-3.719h3.719v-1.75l-3.72.018Z" /></svg>;
};
export default IconClockAddLarge;