import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowOutCircle = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--arrow-out-circle", className, size, "IconArrowOutCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M14.046 7.169 11.334 4.5l-.928.875 1.899 1.899H5.139v1.312h7.166l-1.899 1.908.928.927 2.712-2.712a1.111 1.111 0 0 0 0-1.54Z" /><path d="M8.149 13.408a5.469 5.469 0 0 1 0-10.938 5.25 5.25 0 0 1 2.87.875h2.056a6.695 6.695 0 0 0-4.926-2.188 6.781 6.781 0 1 0 0 13.563 6.659 6.659 0 0 0 4.926-2.188h-2.056a5.25 5.25 0 0 1-2.87.876Z" /></svg>;
};
export default IconArrowOutCircle;