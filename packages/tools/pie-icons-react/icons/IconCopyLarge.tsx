import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCopyLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--copy-large", className, iconSize, "IconCopyLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M26.15 4.345 12.894 2.044a2.45 2.45 0 0 0-2.81 1.986l-.21 1.33h1.75l.176-1.033a.682.682 0 0 1 .787-.55l13.265 2.292a.673.673 0 0 1 .552.779L24.11 20.095v6.221a2.38 2.38 0 0 0 .963-1.566l3.053-17.605a2.425 2.425 0 0 0-1.977-2.8Z" /><path d="M17.584 14.031h-8.75v1.75h8.75v-1.75Z" /><path d="M17.584 17.811h-8.75v1.75h8.75v-1.75Z" /><path d="M17.584 21.591h-8.75v1.75h8.75v-1.75Z" /><path d="M19.929 29.86H6.479a2.432 2.432 0 0 1-2.423-2.433V9.534A2.424 2.424 0 0 1 6.48 7.11h13.449a2.432 2.432 0 0 1 2.432 2.424v17.893a2.442 2.442 0 0 1-2.432 2.433Zm-13.45-21a.674.674 0 0 0-.673.674v17.893a.682.682 0 0 0 .674.683h13.449a.683.683 0 0 0 .682-.683V9.534a.674.674 0 0 0-.682-.674H6.479Z" /></svg>;
};
export default IconCopyLarge;