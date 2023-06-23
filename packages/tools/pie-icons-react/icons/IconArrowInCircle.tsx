import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowInCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--arrow-in-circle", className, iconSize, "IconArrowInCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M1.639 8.595h7.166l-1.899 1.907.928.928 2.712-2.713a1.11 1.11 0 0 0 0-1.548L7.834 4.5l-.928.875 1.899 1.907H1.639v1.313Z" /><path d="M7.851 1.157A6.799 6.799 0 0 0 1.367 5.97H2.75a5.469 5.469 0 1 1 0 3.937H1.376a6.773 6.773 0 1 0 6.475-8.75Z" /></svg>;
};
export default IconArrowInCircle;