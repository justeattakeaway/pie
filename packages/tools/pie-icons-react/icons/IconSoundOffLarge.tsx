import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSoundOffLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--sound-off-large", className, iconSize, "IconSoundOffLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M20.375 22.79v3.658a48.52 48.52 0 0 0-3.841-3.264 48.651 48.651 0 0 0-4.909-3.308v-7.752c1.703-1 3.343-2.105 4.909-3.308a48.518 48.518 0 0 0 3.841-3.264v3.754l.508.517 1.242 1.233V3.75h-2.398l-.227.245a48.276 48.276 0 0 1-4.008 3.439 49.96 49.96 0 0 1-4.987 3.316H7.25a2.625 2.625 0 0 0-2.625 2.625v5.25A2.625 2.625 0 0 0 7.25 21.25h3.255a48.311 48.311 0 0 1 8.995 6.755l.254.245h2.371v-7.21l-1.75 1.75Zm-10.5-3.29H7.25a.875.875 0 0 1-.875-.875v-5.25a.875.875 0 0 1 .875-.875h2.625v7Z" /><path d="M28.399 12.246 24.645 16l3.754 3.754-1.234 1.242-3.762-3.762-3.754 3.762-1.234-1.242L22.169 16l-3.754-3.754 1.234-1.242 3.753 3.762 3.763-3.762 1.234 1.242Z" /></svg>;
};
export default IconSoundOffLarge;