import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialYoutubeCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--youtube-circle-filled", className, iconSize, "IconSocialYoutubeCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g clipPath="url(#prefix__clip0_1611_662)"><path fill="#242E30" fillRule="evenodd" d="M4.237 2.315A6.781 6.781 0 0 1 8 1.175 6.79 6.79 0 0 1 14.78 8 6.781 6.781 0 1 1 4.237 2.315Zm6.638 4.356a.76.76 0 0 0-.53-.543C9.875 6 8 6 8 6s-1.876 0-2.344.128a.76.76 0 0 0-.53.543C5 7.15 5 8.148 5 8.148s0 1 .125 1.478a.76.76 0 0 0 .53.543c.469.128 2.345.128 2.345.128s1.876 0 2.344-.128a.76.76 0 0 0 .53-.543C11 9.147 11 8.148 11 8.148s0-.998-.125-1.477ZM7.386 9.209l1.569-.907-1.569-.907V9.21Z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0_1611_662"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialYoutubeCircleFilled;