import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconDirections = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--directions", className, iconSize, "IconDirections");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M14.072 6.232 11.194 2.97H6.25V1.656H4.929V2.97h-3.5v8.75h3.5v2.625H6.25v-2.625h4.953l2.87-3.264a1.47 1.47 0 0 0 0-2.223Zm-.883 1.26-2.564 2.914H6.25V8h1.137v1.146L9.96 7.344 7.387 5.69v.997H4.93v3.72H2.75V4.28h7.875l2.476 2.844.079.079a.15.15 0 0 1 .058.208.15.15 0 0 1-.058.054l.009.026Z" /></svg>;
};
export default IconDirections;