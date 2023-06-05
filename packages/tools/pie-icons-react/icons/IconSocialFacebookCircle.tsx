import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialFacebookCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--facebook-circle", className, iconSize, "IconSocialFacebookCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_889_539)"><path d="M8 1.175A6.781 6.781 0 1 0 14.782 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.469 5.469 0 1 1 8 2.487a5.469 5.469 0 0 1 0 10.938Z" /><path d="M7.213 6.145v.98H6.058v1.313h1.155v3.167c.234.043.47.063.709.061a3.81 3.81 0 0 0 .708-.061v-3.15h1.06l.2-1.33H8.63V6.25a.656.656 0 0 1 .744-.717h.569V4.5a7 7 0 0 0-1.015-.087 1.601 1.601 0 0 0-1.715 1.732Z" /></g><defs><clipPath id="prefix__clip0_889_539"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialFacebookCircle;