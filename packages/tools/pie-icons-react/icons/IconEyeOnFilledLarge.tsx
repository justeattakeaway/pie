import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconEyeOnFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--eye-on-filled-large", className, iconSize, "IconEyeOnFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M24.024 10.094a11.375 11.375 0 0 0-16.048 0L2.08 16l5.897 5.906a11.375 11.375 0 0 0 16.048 0L29.92 16l-5.897-5.906ZM16 20.813A4.813 4.813 0 1 1 20.813 16 4.821 4.821 0 0 1 16 20.813Z" /><path d="M16 19.063a3.062 3.062 0 1 0 0-6.125 3.062 3.062 0 0 0 0 6.124Z" /></svg>;
};
export default IconEyeOnFilledLarge;