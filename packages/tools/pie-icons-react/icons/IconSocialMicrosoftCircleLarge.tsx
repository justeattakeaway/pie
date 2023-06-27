import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialMicrosoftCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--microsoft-circle-large", className, size, "IconSocialMicrosoftCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z" /><path d="M10 10h5.5v5.5H10V10Z" /><path d="M10 16.5h5.5V22H10v-5.5Z" /><path d="M16.5 10H22v5.5h-5.5V10Z" /><path d="M16.5 16.5H22V22h-5.5v-5.5Z" /></svg>;
};
export default IconSocialMicrosoftCircleLarge;