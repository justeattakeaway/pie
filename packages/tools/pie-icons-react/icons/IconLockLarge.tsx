import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLockLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--lock-large", className, iconSize, "IconLockLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M23.875 14.25h-1.75v-3.5a6.125 6.125 0 1 0-12.25 0v3.5h-1.75v-3.5a7.875 7.875 0 0 1 15.75 0v3.5Z" /><path fill="#242E30" d="M16 29.125a18.209 18.209 0 0 1-11.043-3.692l-.332-.263V13.375h22.75V25.17l-.332.262A17.92 17.92 0 0 1 16 29.126Zm-9.625-4.804A16.625 16.625 0 0 0 16 27.375a16.267 16.267 0 0 0 9.625-3.054v-9.196H6.375v9.196Z" /><path fill="#242E30" d="M16.875 17.75h-1.75V23h1.75v-5.25Z" /></svg>;
};
export default IconLockLarge;