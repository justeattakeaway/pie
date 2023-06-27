import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCloseLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--close-large", className, size, "IconCloseLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m23.42 24.663 1.242-1.243L17.234 16l7.428-7.429-1.242-1.233L16 14.766 8.57 7.338 7.337 8.57 14.767 16l-7.43 7.42 1.234 1.242L16 17.235l7.42 7.428Z" /></svg>;
};
export default IconCloseLarge;