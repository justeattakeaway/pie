import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLocationPin = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--location-pin", className, iconSize, "IconLocationPin");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M11.938 3.135a5.574 5.574 0 0 0-7.875 7.875L8 15l3.938-3.938a5.575 5.575 0 0 0 0-7.927Zm-.928 7L8 13.101l-3.01-3.01a4.27 4.27 0 0 1 0-6.029 4.27 4.27 0 0 1 6.02 0 4.27 4.27 0 0 1 0 6.03v.043ZM8 4.719A2.406 2.406 0 1 0 8 9.53 2.406 2.406 0 0 0 8 4.72Zm0 3.5A1.094 1.094 0 1 1 8 6.03 1.094 1.094 0 0 1 8 8.22Z" /></svg>;
};
export default IconLocationPin;