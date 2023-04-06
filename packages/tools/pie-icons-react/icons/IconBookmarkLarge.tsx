import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconBookmarkLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--bookmark-large", className, iconSize, "IconBookmarkLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="m20.988 11.485-2.94-.429-1.322-2.66c-.13-.262-.402-.394-.69-.394-.29 0-.56.132-.692.394l-1.321 2.66-2.94.429a.77.77 0 0 0-.622.516.734.734 0 0 0 .193.779l2.126 2.074-.507 2.922a.785.785 0 0 0 .306.753.765.765 0 0 0 .814.061l2.625-1.383 2.625 1.383a.75.75 0 0 0 .358.087.77.77 0 0 0 .761-.901l-.507-2.922 2.126-2.074c.21-.21.28-.507.193-.779a.745.745 0 0 0-.621-.516h.035Zm-2.774 2.284-.578.56.14.796.237 1.4-1.252-.656-.708-.377-.71.377-1.25.656.236-1.4.14-.796-.578-.56-1.015-.989 1.4-.21.797-.114.358-.717.63-1.269.63 1.269.36.717.795.114 1.4.21-1.015.989h-.017Z" /><path fill="#242E30" d="M24.768 4.188h-17.5a2.633 2.633 0 0 0-2.625 2.625v21.542l11.392-5.688 11.358 5.688V6.812a2.633 2.633 0 0 0-2.625-2.625Zm.875 21.332-9.608-4.813-9.642 4.813V6.813c0-.482.393-.875.875-.875h17.5c.48 0 .875.393.875.875V25.52Z" /></svg>;
};
export default IconBookmarkLarge;