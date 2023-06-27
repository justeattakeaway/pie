import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconRestrictedLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--restricted-large", className, size, "IconRestrictedLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5ZM5.5 16A10.5 10.5 0 0 1 23 8.195L8.195 23A10.421 10.421 0 0 1 5.5 16ZM16 26.5a10.5 10.5 0 0 1-6.527-2.293L24.207 9.473A10.5 10.5 0 0 1 16 26.5Z" /></svg>;
};
export default IconRestrictedLarge;