import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialMicrosoftLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--microsoft-large", className, iconSize, "IconSocialMicrosoftLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#F15121" d="M4 4h11v11H4V4Z" /><path fill="#00A3EE" d="M4 17h11v11H4V17Z" /><path fill="#7EB801" d="M17 4h11v11H17V4Z" /><path fill="#FFB700" d="M17 17h11v11H17V17Z" /></svg>;
};
export default IconSocialMicrosoftLarge;