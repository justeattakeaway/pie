import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCloseCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--close-circle", className, iconSize, "IconCloseCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M10.87 6.058 8.928 8l1.942 1.943-.927.927L8 8.928 6.058 10.87l-.928-.927L7.072 8 5.13 6.058l.928-.928L8 7.072 9.943 5.13l.927.928ZM14.781 8A6.782 6.782 0 1 1 8 1.219 6.79 6.79 0 0 1 14.781 8ZM13.47 8A5.469 5.469 0 1 0 2.53 8a5.469 5.469 0 0 0 10.938 0Z" /></svg>;
};
export default IconCloseCircle;