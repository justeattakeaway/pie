import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialFacebookCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--facebook-circle-filled", className, iconSize, "IconSocialFacebookCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g clipPath="url(#prefix__clip0_1595_1533)"><path fill="#242E30" d="M8.14 1.411A6.615 6.615 0 1 0 14.755 8 6.624 6.624 0 0 0 8.14 1.411Zm1.942 4.165h-.577a.656.656 0 0 0-.735.718v.831h1.26l-.201 1.313h-1.06v3.167a3.88 3.88 0 0 1-.708.061 3.743 3.743 0 0 1-.709-.061v-3.15H6.197v-1.33h1.155v-.98a1.601 1.601 0 0 1 1.75-1.75c.34.005.68.034 1.015.088l-.035 1.093Z" /></g><defs><clipPath id="prefix__clip0_1595_1533"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialFacebookCircleFilled;