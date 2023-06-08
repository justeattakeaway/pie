import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconEyeOnFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--eye-on-filled", className, iconSize, "IconEyeOnFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M12.017 4.789a5.337 5.337 0 0 0-8.033 0L1.062 8l2.922 3.211a5.337 5.337 0 0 0 8.032 0l2.923-3.21-2.922-3.212Zm-2.32 4.909a2.398 2.398 0 1 1 0-3.395 2.38 2.38 0 0 1 0 3.395Z" /><path d="M8 6.906a1.059 1.059 0 0 0-.77.324 1.085 1.085 0 1 0 1.54 0A1.059 1.059 0 0 0 8 6.906Z" /></svg>;
};
export default IconEyeOnFilled;