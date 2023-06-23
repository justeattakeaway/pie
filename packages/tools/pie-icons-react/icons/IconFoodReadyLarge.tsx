import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFoodReadyLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--food-ready-large", className, iconSize, "IconFoodReadyLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m9.376 13.996 1.374 1.129A7 7 0 0 1 16 12.719v-1.75a8.75 8.75 0 0 0-6.624 3.027Z" /><path d="M13.874 21.25c.06-.596.186-1.183.376-1.75H5.937a10.054 10.054 0 0 1 18.585-5.329 8.006 8.006 0 0 1 2.564 1.304 11.83 11.83 0 0 0-8.951-7.586c.316-.442.487-.97.49-1.514a2.625 2.625 0 0 0-5.25 0c.003.543.174 1.072.49 1.514A11.83 11.83 0 0 0 4.187 19.5H2.875v5.25H14.25a8.91 8.91 0 0 1-.385-1.75h-9.24v-1.75h9.249ZM16 5.5a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75Z" /><path d="m21.285 22.764-1.199-1.19-1.233 1.233 2.432 2.433 4.113-4.121-1.234-1.234-2.879 2.879Z" /><path d="M28.25 19.675a6.877 6.877 0 0 0-1.794-2.511 6.6 6.6 0 0 0-1.846-1.12 6.459 6.459 0 0 0-2.485-.482 6.536 6.536 0 0 0-4.288 1.602 6.766 6.766 0 0 0-1.854 2.625 6.79 6.79 0 0 0-.394 1.75v.551a6.562 6.562 0 1 0 12.661-2.415Zm-6.125 7.262a4.821 4.821 0 0 1-4.813-4.812v-.551a4.77 4.77 0 0 1 .552-1.75c.186-.313.403-.606.647-.875a4.804 4.804 0 0 1 7.158 0c.244.27.46.563.647.875.296.542.483 1.136.552 1.75v.551a4.822 4.822 0 0 1-4.743 4.813Z" /></svg>;
};
export default IconFoodReadyLarge;