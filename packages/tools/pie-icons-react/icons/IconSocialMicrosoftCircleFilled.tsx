import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialMicrosoftCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--microsoft-circle-filled", className, iconSize, "IconSocialMicrosoftCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_2820_3487)"><path fillRule="evenodd" d="M4.237 2.315A6.781 6.781 0 0 1 8 1.175 6.79 6.79 0 0 1 14.78 8 6.781 6.781 0 1 1 4.237 2.315Zm3.473 5.4H5V5h2.726L7.71 7.715ZM5 11h2.71l.016-2.715H5V11Zm3.274 0H11V8.285H8.274V11Zm0-3.285H11V5H8.274v2.715Z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0_2820_3487"><rect width={14} height={14} transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialMicrosoftCircleFilled;