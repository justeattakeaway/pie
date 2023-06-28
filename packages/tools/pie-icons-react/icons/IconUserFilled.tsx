import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconUserFilled = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--user-filled", className, size, "IconUserFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M13.355 11.78a4.14 4.14 0 0 0-3.938-2.686H6.582a4.139 4.139 0 0 0-3.937 2.686l-.831 2.345h12.372l-.831-2.345Z" /><path d="M8 8a3.062 3.062 0 1 0 0-6.125A3.062 3.062 0 0 0 8 8Z" /></svg>;
};
export default IconUserFilled;