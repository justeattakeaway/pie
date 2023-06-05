import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialMicrosoftCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--microsoft-circle-filled-large", className, iconSize, "IconSocialMicrosoftCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5Z" /><path fill="#fff" d="M10 10h5.5v5.5H10V10Z" /><path fill="#fff" d="M10 16.5h5.5V22H10v-5.5Z" /><path fill="#fff" d="M16.5 10H22v5.5h-5.5V10Z" /><path fill="#fff" d="M16.5 16.5H22V22h-5.5v-5.5Z" /></svg>;
};
export default IconSocialMicrosoftCircleFilledLarge;