import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconSocialGoogleCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--google-circle-large", className, iconSize, "IconSocialGoogleCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z" /><path fill="#242E30" d="M8.729 16.254V15.527l.052-.472c.056-.52.174-1.03.35-1.522a7.368 7.368 0 0 1 7.971-4.883 6.887 6.887 0 0 1 3.5 1.47l.438.359-2.083 2.021a4.07 4.07 0 0 0-3.071-1.068 4.2 4.2 0 0 0-2.354.875 4.55 4.55 0 0 0-1.811 3.413c-.042.596.05 1.194.271 1.75.159.442.383.858.665 1.234a4.445 4.445 0 0 0 2.424 1.627c.612.154 1.25.178 1.872.07a4.13 4.13 0 0 0 1.794-.691 3.404 3.404 0 0 0 1.4-2.091v-.175h-4.016v-2.87H23c0 .254.078.498.096.752a8.512 8.512 0 0 1-.297 3.299 6.764 6.764 0 0 1-1.847 2.957c-.297.27-.62.51-.962.718a7.228 7.228 0 0 1-3.334 1.006 7.253 7.253 0 0 1-5.574-1.995 6.815 6.815 0 0 1-1.557-2.135 6.614 6.614 0 0 1-.569-1.653c-.079-.386-.114-.788-.166-1.173a.315.315 0 0 0-.061-.096Z" /></svg>;
};
export default IconSocialGoogleCircleLarge;