import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialBloggerCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--blogger-circle-large", className, iconSize, "IconSocialBloggerCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z" /><path fill="#242E30" d="M21.626 14.775a.718.718 0 0 0-.455-.158h-.665a.875.875 0 0 1-.288-.052.77.77 0 0 1-.5-.7 3.81 3.81 0 0 0-.13-.998 3.858 3.858 0 0 0-3.71-2.826h-1.952a3.858 3.858 0 0 0-3.85 3.832v4.262c0 .294.032.588.096.875a3.867 3.867 0 0 0 2.328 2.669c.456.185.943.28 1.435.28h4.156c.333-.002.665-.043.989-.123a3.86 3.86 0 0 0 2.861-3.727v-2.73a.754.754 0 0 0-.315-.604Zm-7.945-1.593H16a.735.735 0 0 1 .718.578.742.742 0 0 1-.674.875h-2.389a.735.735 0 0 1 0-1.435l.026-.018Zm4.629 5.705h-4.454a.7.7 0 0 1-.691-.927.665.665 0 0 1 .735-.455h4.244a.726.726 0 0 1 .236 0 .7.7 0 0 1-.07 1.365v.017Z" /></svg>;
};
export default IconSocialBloggerCircleLarge;