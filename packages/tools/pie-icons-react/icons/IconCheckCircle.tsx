import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCheckCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--check-circle", className, iconSize, "IconCheckCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M13.495 8a5.487 5.487 0 1 1-1.75-3.99l.875-.962a6.764 6.764 0 1 0 1.759 2.616l-1.032 1.12c.098.398.148.806.148 1.216Z" /><path d="M8.061 10.625a1.215 1.215 0 0 1-.875-.385L4.99 7.781l.98-.875 2.118 2.38 5.416-5.888.963.875-5.522 5.95a1.181 1.181 0 0 1-.875.384l-.009.018Z" /></svg>;
};
export default IconCheckCircle;