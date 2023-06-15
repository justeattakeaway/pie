import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconStarHalfFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--star-half-filled", className, iconSize, "IconStarHalfFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="m11.544 9.601 3.386-3.299-4.672-.682a.227.227 0 0 1-.167-.114l-2.09-4.235-2.092 4.235a.228.228 0 0 1-.166.114l-4.673.682 3.43 3.3a.254.254 0 0 1 .061.192l-.848 4.655 4.182-2.197a.219.219 0 0 1 .21 0l4.183 2.197-.788-4.655a.251.251 0 0 1 .044-.193Zm-1.356.411.35 2.04-1.83-.963A1.54 1.54 0 0 0 8 10.914V4.229l.875 1.855a1.531 1.531 0 0 0 1.155.875l2.048.297-1.453 1.4a1.54 1.54 0 0 0-.437 1.356Z" /></svg>;
};
export default IconStarHalfFilled;