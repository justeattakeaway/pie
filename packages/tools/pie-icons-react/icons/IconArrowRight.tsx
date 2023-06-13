import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowRight = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--arrow-right", className, iconSize, "IconArrowRight");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M1 8.75h11.65l-3.76 3.76L10 13.57l4.68-4.69a1.239 1.239 0 0 0 0-1.76L10 2.43 8.89 3.49l3.76 3.76H1v1.5Z" /></svg>;
};
export default IconArrowRight;