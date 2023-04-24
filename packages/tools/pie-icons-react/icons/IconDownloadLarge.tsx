import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconDownloadLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--download-large", className, iconSize, "IconDownloadLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M15.125 17.024V2.875h1.75v14.219l4.016-4.078 1.234 1.234-4.926 4.935a1.75 1.75 0 0 1-2.398 0L9.875 14.25l1.234-1.234 4.016 4.008ZM24.75 7.25H19.5V9h5.25a.875.875 0 0 1 .875.875v15.75a.875.875 0 0 1-.875.875H7.25a.875.875 0 0 1-.875-.875V9.875A.875.875 0 0 1 7.25 9h5.25V7.25H7.25a2.625 2.625 0 0 0-2.625 2.625v15.75A2.625 2.625 0 0 0 7.25 28.25h17.5a2.625 2.625 0 0 0 2.625-2.625V9.875A2.625 2.625 0 0 0 24.75 7.25Z" /></svg>;
};
export default IconDownloadLarge;