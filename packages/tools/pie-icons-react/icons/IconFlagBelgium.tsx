import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFlagBelgium = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--belgium", className, iconSize, "IconFlagBelgium");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path fill="#FFDA44" d="M10.433 1.438a6.986 6.986 0 0 0-4.867 0L4.956 8l.61 6.562a6.984 6.984 0 0 0 4.867 0L11.043 8l-.61-6.562Z" /><path fill="#D80027" d="M15 8a7 7 0 0 0-4.567-6.562v13.124A7.001 7.001 0 0 0 15 8Z" /><path fill="#333" d="M1 8a7 7 0 0 0 4.566 6.562V1.438A6.999 6.999 0 0 0 1 8Z" /></svg>;
};
export default IconFlagBelgium;