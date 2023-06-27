import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconOffer = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--offer", className, size, "IconOffer");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M7.676 14.939 1.087 8.35l6.38-6.388a1.409 1.409 0 0 1 1.12-.402l5.337.534.533 5.346a1.373 1.373 0 0 1-.393 1.111L7.676 14.94ZM2.942 8.35l4.734 4.734 5.46-5.46-.411-4.332-4.27-.42L2.942 8.35Zm7.683-3.85a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Z" /></svg>;
};
export default IconOffer;