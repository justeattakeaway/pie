import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPhoneLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--phone-large", className, iconSize, "IconPhoneLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M20.375 19.57a2.485 2.485 0 0 0-3.237.7l-2.818 3.841a17.955 17.955 0 0 1-6.545-6.702l3.334-2.546a2.555 2.555 0 0 0 .717-3.238l-3.43-6.431-2.222 1.181a4.567 4.567 0 0 0-2.38 4.646 20.239 20.239 0 0 0 2.1 6.554 19.81 19.81 0 0 0 8.286 8.453 19.34 19.34 0 0 0 6.711 2.222c.181.013.362.013.543 0a4.498 4.498 0 0 0 3.902-2.398l1.47-2.738-6.43-3.544ZM5.5 10.75a2.8 2.8 0 0 1 1.496-2.826l.674-.368 2.625 4.918a.788.788 0 0 1-.21.997l-3.089 2.354A18.095 18.095 0 0 1 5.5 10.75Zm18.296 14.28a2.704 2.704 0 0 1-2.677 1.47 17.685 17.685 0 0 1-5.25-1.54l2.625-3.631a.735.735 0 0 1 .971-.219l4.9 2.721-.569 1.199Zm-6.92-17.78V5.5a9.625 9.625 0 0 1 9.624 9.625h-1.75a7.875 7.875 0 0 0-7.875-7.875Zm0 4.375v-1.75a5.25 5.25 0 0 1 5.25 5.25h-1.75a3.5 3.5 0 0 0-3.5-3.5Z" /></svg>;
};
export default IconPhoneLarge;