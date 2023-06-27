import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSpicyLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--spicy-large", className, size, "IconSpicyLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M8.37 26.106c-3.168 0-4.375-1.829-4.48-1.934l-.586-.875 1.006-.385c4.279-1.662 6.44-6.037 8.4-9.843a23.407 23.407 0 0 1 3.5-5.67 6.126 6.126 0 0 1 8.794 0 6.44 6.44 0 0 1 0 8.942c-3.29 3.378-9.302 7.875-12.994 9.091a11.28 11.28 0 0 1-3.64.674Zm-2.118-2.231c.875.446 2.512.779 5.198-.131 3.404-1.164 9.222-5.495 12.311-8.663a4.672 4.672 0 0 0 0-6.492 4.376 4.376 0 0 0-6.282 0 22.226 22.226 0 0 0-3.212 5.25c-1.872 3.745-3.98 7.918-8.015 10.036Z" /><path d="m22.921 11.109-1.592-.718c2.87-6.44 6.755-6.51 6.921-6.51v1.75c-.105 0-2.957.167-5.329 5.478Z" /><path d="M25.056 12.806a6.011 6.011 0 0 1-6.002-6.002 2.77 2.77 0 0 1 .052-.63l1.706.385a2.003 2.003 0 0 0 0 .245 4.261 4.261 0 0 0 4.253 4.252c.277.004.553-.025.822-.087l.386 1.706a5.25 5.25 0 0 1-1.217.131Z" /></svg>;
};
export default IconSpicyLarge;