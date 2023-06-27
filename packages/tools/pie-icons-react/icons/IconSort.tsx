import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSort = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--sort", className, size, "IconSort");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M9.75 11.719h-3.5v1.312h3.5V11.72Z" /><path d="M12.375 7.344h-8.75v1.312h8.75V7.344Z" /><path d="M15 2.969H1V4.28h14V2.97Z" /></svg>;
};
export default IconSort;