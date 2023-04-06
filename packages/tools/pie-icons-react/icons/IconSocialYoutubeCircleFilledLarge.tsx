import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconSocialYoutubeCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--youtube-circle-filled-large", className, iconSize, "IconSocialYoutubeCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" fillRule="evenodd" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.707 9.174a1.774 1.774 0 0 0-1.237-1.267c-1.092-.299-5.47-.299-5.47-.299s-4.378 0-5.47.3a1.774 1.774 0 0 0-1.237 1.266C9 14.04 9 16.37 9 16.37s0 2.33.293 3.448c.16.616.635 1.1 1.237 1.266 1.092.299 5.47.299 5.47.299s4.378 0 5.47-.3a1.774 1.774 0 0 0 1.237-1.265C23 18.701 23 16.37 23 16.37s0-2.33-.293-3.447Zm-8.138 5.563 3.659-2.116-3.66-2.116v4.232Z" clipRule="evenodd" /></svg>;
};
export default IconSocialYoutubeCircleFilledLarge;