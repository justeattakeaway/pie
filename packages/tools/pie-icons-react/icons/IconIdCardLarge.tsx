import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconIdCardLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--id-card-large", className, size, "IconIdCardLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M26.5 6.375h-21A2.625 2.625 0 0 0 2.875 9v14A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23V9A2.625 2.625 0 0 0 26.5 6.375ZM27.375 23a.875.875 0 0 1-.875.875h-21A.875.875 0 0 1 4.625 23V9a.875.875 0 0 1 .875-.875h21a.875.875 0 0 1 .875.875v14Z" /><path d="M12.5 9.875H9A2.625 2.625 0 0 0 6.375 12.5V16A2.625 2.625 0 0 0 9 18.625h3.5A2.625 2.625 0 0 0 15.125 16v-3.5A2.625 2.625 0 0 0 12.5 9.875ZM13.375 16a.875.875 0 0 1-.875.875H9A.875.875 0 0 1 8.125 16v-3.5A.875.875 0 0 1 9 11.625h3.5a.875.875 0 0 1 .875.875V16Z" /><path d="m24.409 18.625.875-1.75h-6.659v1.75h5.784Z" /><path d="m22.659 22.125.875-1.75h-4.909v1.75h4.034Z" /></svg>;
};
export default IconIdCardLarge;