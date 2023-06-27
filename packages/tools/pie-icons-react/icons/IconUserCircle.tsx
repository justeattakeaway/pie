import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconUserCircle = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--user-circle", className, size, "IconUserCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M8 5.13a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24Zm0-1.313a2.433 2.433 0 1 0 2.432 2.433A2.441 2.441 0 0 0 8 3.817Z" /><path d="M8 1.438a6.563 6.563 0 0 0-4.944 10.876c.298.322.626.615.98.875a6.537 6.537 0 0 0 7.928 0c.354-.26.682-.553.98-.875A6.562 6.562 0 0 0 8 1.437Zm3.08 10.806a5.25 5.25 0 0 1-6.125 0 7.736 7.736 0 0 1-.516-.42c.153-.172.326-.325.516-.455a2.993 2.993 0 0 1 1.662-.49h2.8a2.993 2.993 0 0 1 1.663.49c.19.13.363.283.516.455a7.722 7.722 0 0 1-.516.42Zm1.339-1.435a3.495 3.495 0 0 0-.377-.341 4.235 4.235 0 0 0-2.625-.876H6.582a4.235 4.235 0 0 0-2.625.875c-.133.105-.259.219-.376.342a5.25 5.25 0 1 1 8.838 0Z" /></svg>;
};
export default IconUserCircle;