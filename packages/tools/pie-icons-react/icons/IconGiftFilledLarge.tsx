import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGiftFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--gift-filled-large", className, iconSize, "IconGiftFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16.831 28.215h7.044A2.633 2.633 0 0 0 26.5 25.59V14.215h-9.669v14Z" /><path fill="#242E30" d="M5.5 25.59a2.633 2.633 0 0 0 2.625 2.625h6.956v-14H5.5V25.59Z" /><path fill="#242E30" d="M16.849 8.09v-.017a3.064 3.064 0 0 1 3.01-2.538c.175 0 .35.026.525.053v-1.75c-.175-.018-.341-.053-.525-.053a4.801 4.801 0 0 0-3.894 1.995 4.801 4.801 0 0 0-3.894-1.995c-.149 0-.288.026-.437.044v1.75c.149-.018.288-.044.437-.044a3.063 3.063 0 0 1 3.01 2.538v.017H3.75v4.375h11.331V8.081h1.75v4.375H28.25V8.09H16.849Z" /></svg>;
};
export default IconGiftFilledLarge;