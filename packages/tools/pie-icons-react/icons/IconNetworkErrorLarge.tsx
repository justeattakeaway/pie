import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconNetworkErrorLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--network-error-large", className, iconSize, "IconNetworkErrorLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M7 25h4.8V14.5H7V25Zm1.5-9h1.8v7.5H8.5V16Z" /><path fill="#242E30" d="M25 7h-4.8v14.543l-1.8-3V10.75h-4.65l-3.623-6H8.372l5.25 8.707V25h4.8v-3.54l1.8 3V25h.278l1.35 2.25h1.755L22.255 25H25V7Zm-9.9 5.25h1.8v3.795l-1.8-3v-.795Zm1.8 11.25h-1.8v-7.545l1.8 3V23.5Zm6.6 0h-1.8v-15h1.8v15Z" /></svg>;
};
export default IconNetworkErrorLarge;