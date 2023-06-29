import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFlagItaly = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--italy", className, size, "IconFlagItaly");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path d="M15 8a7 7 0 0 0-4.566-6.563v13.126A7 7 0 0 0 15 8Z" /><path d="M1 8a7 7 0 0 0 4.566 6.563V1.437A7 7 0 0 0 1 8Z" /></svg>;
};
export default IconFlagItaly;