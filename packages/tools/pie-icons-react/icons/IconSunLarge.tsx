import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSunLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--sun-large", className, iconSize, "IconSunLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M15.125 26.5v2.625h1.75V26.5c-.289 0-.578.044-.875.044-.297 0-.586-.044-.875-.044Z" /><path fill="#242E30" d="M16.875 5.544V2.875h-1.75v2.669H16c.297 0 .586-.044.875 0Z" /><path fill="#242E30" d="M2.875 15.125v1.75h2.669v-1.75H2.875Z" /><path fill="#242E30" d="M26.5 15.125c0 .289.044.578.044.875 0 .297 0 .586-.044.875h2.625v-1.75H26.5Z" /><path fill="#242E30" d="M22.773 7.994c.445.375.858.788 1.233 1.233l1.89-1.89-1.233-1.233-1.89 1.89Z" /><path fill="#242E30" d="m7.994 22.773-1.89 1.89 1.234 1.233 1.89-1.89a10.278 10.278 0 0 1-1.234-1.233Z" /><path fill="#242E30" d="m22.773 24.006 1.89 1.89 1.233-1.233-1.89-1.89c-.375.445-.788.858-1.233 1.233Z" /><path fill="#242E30" d="m9.228 7.994-1.89-1.89-1.234 1.234 1.89 1.89c.375-.446.788-.859 1.234-1.234Z" /><path fill="#242E30" d="M24.75 16c0-.297 0-.586-.044-.875a8.75 8.75 0 0 0-7.831-7.831h-1.75a8.75 8.75 0 0 0-7.831 7.875v1.75a8.75 8.75 0 0 0 7.875 7.875c.288 0 .577.043.875.043.297 0 .586 0 .875-.043a8.75 8.75 0 0 0 7.831-7.919V16Zm-1.986 1.75v.061a6.785 6.785 0 0 1-.726 1.689 7.14 7.14 0 0 1-2.538 2.538c-.526.31-1.09.549-1.68.708h-.061a7 7 0 1 1-.009-13.51h.061a6.78 6.78 0 0 1 1.689.726 7.14 7.14 0 0 1 2.538 2.538c.31.525.549 1.09.708 1.68v.061a6.8 6.8 0 0 1 0 3.553l.018-.044Z" /><path fill="#242E30" d="M20.288 21.521a7.14 7.14 0 0 0 1.75-2.021c-.16.26-.332.51-.517.753-.355.474-.77.9-1.233 1.268Z" /><path fill="#242E30" d="M22.764 17.75Z" /><path fill="#242E30" d="M17.75 9.236Z" /><path fill="#242E30" d="M16 23Z" /><path fill="#242E30" d="M22.939 15.125a7.002 7.002 0 0 0 0 0Z" /><path fill="#242E30" d="M21.521 11.713a7.14 7.14 0 0 0-2.021-1.75c.26.158.51.33.753.516.474.355.9.77 1.268 1.234Z" /></svg>;
};
export default IconSunLarge;