import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPlayCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--play-circle-large", className, iconSize, "IconPlayCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Z" /><path fill="#242E30" d="m21.425 14.766-7.516-3.928a1.417 1.417 0 0 0-1.462-.088 1.46 1.46 0 0 0-.778 1.304v7.875a1.46 1.46 0 0 0 1.444 1.487c.274 0 .542-.083.77-.236l7.56-3.964A1.462 1.462 0 0 0 22.124 16a1.479 1.479 0 0 0-.7-1.234Zm-8.05 4.734v-7l6.659 3.5-6.659 3.5Z" /></svg>;
};
export default IconPlayCircleLarge;