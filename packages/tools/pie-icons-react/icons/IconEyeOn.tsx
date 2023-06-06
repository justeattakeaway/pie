import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconEyeOn = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--eye-on", className, iconSize, "IconEyeOn");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M12.016 4.789a5.338 5.338 0 0 0-8.032 0L1.06 8l2.923 3.211a5.337 5.337 0 0 0 8.032 0l2.923-3.21-2.923-3.212Zm-.971 5.539a4.025 4.025 0 0 1-6.125 0L2.838 8l2.117-2.327a4.025 4.025 0 0 1 6.125 0L13.162 8l-2.117 2.328ZM6.303 6.303a2.406 2.406 0 1 0 3.395 0 2.38 2.38 0 0 0-3.395 0ZM8.77 8.77a1.085 1.085 0 0 1-1.54 0 1.094 1.094 0 1 1 1.54 0Z" /></svg>;
};
export default IconEyeOn;