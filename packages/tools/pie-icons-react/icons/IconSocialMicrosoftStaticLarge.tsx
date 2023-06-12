import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialMicrosoftStaticLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--microsoft-static-large", className, iconSize, "IconSocialMicrosoftStaticLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path fill="#F15121" d="M4 4h11v11H4V4Z" /><path fill="#00A3EE" d="M4 17h11v11H4V17Z" /><path fill="#7EB801" d="M17 4h11v11H17V4Z" /><path fill="#FFB700" d="M17 17h11v11H17V17Z" /></svg>;
};
export default IconSocialMicrosoftStaticLarge;