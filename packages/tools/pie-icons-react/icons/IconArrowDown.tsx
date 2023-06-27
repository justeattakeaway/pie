import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowDown = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--arrow-down", className, size, "IconArrowDown");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M7.25 1v11.65L3.49 8.89 2.43 10l4.69 4.68a1.239 1.239 0 0 0 1.76 0L13.57 10l-1.06-1.11-3.76 3.76V1h-1.5Z" /></svg>;
};
export default IconArrowDown;