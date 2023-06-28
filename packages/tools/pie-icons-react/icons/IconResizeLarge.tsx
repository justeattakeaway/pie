import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconResizeLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--resize-large", className, size, "IconResizeLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M22.726 2.243V1L1 22.735h1.243L22.726 2.243Z" /><path d="M2.243 22.735h1.233l19.25-19.259V2.243L2.243 22.735Z" /><path d="M14.099 22.735h1.233l7.394-7.402v-1.234L14.1 22.735Z" /><path d="m14.099 22.735 8.627-8.636v-1.234l-9.861 9.87h1.234Z" /></svg>;
};
export default IconResizeLarge;