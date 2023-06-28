import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGeolocationCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--geolocation-circle-filled-large", className, size, "IconGeolocationCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m16.718 19.185 1.96-5.862-5.863 1.96a6.431 6.431 0 0 1 3.903 3.902Z" /><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm1.479 18.69h-1.75l-.551-2.205a4.752 4.752 0 0 0-3.448-3.447l-2.205-.552v-1.75l11.917-3.929L17.48 22.44Z" /></svg>;
};
export default IconGeolocationCircleFilledLarge;