import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPlay = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--play", className, iconSize, "IconPlay");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M4.596 4.299 11.544 8l-6.948 3.693V4.299ZM4.255 2.75a.962.962 0 0 0-.971.963v8.557a.963.963 0 0 0 1.478.831l7.403-3.946a1.312 1.312 0 0 0 0-2.319L4.762 2.908a.945.945 0 0 0-.507-.158Z" /></svg>;
};
export default IconPlay;