import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialMicrosoftStatic = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--microsoft-static", className, iconSize, "IconSocialMicrosoftStatic");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_2820_3494)"><path fill="#00A3EE" d="M7.372 14.5H1.5V8.618h5.905L7.372 14.5Z" /><path fill="#FFB700" d="M8.595 14.5H14.5V8.618H8.595V14.5Z" /><path fill="#F15121" d="M7.372 7.382H1.5V1.5h5.905l-.033 5.882Z" /><path fill="#7EB801" d="M14.5 7.382H8.595V1.5H14.5v5.882Z" /></g><defs><clipPath id="prefix__clip0_2820_3494"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialMicrosoftStatic;