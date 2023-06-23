import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialMicrosoftCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--microsoft-circle-filled-large", className, iconSize, "IconSocialMicrosoftCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path fillRule="evenodd" d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM15.5 10H10v5.5h5.5V10Zm0 6.5H10V22h5.5v-5.5Zm1-6.5H22v5.5h-5.5V10Zm5.5 6.5h-5.5V22H22v-5.5Z" clipRule="evenodd" /></svg>;
};
export default IconSocialMicrosoftCircleFilledLarge;