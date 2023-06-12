import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSortAscendingLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--sort-ascending-large", className, iconSize, "IconSortAscendingLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M18.03 10.75H2V9h16.765l-.735 1.75ZM2 23h10.867l.735-1.75H2V23Zm0-6.125h13.449l.735-1.75H2v1.75Zm25.891 3.141-4.016 4.078V12.5h-1.75v11.524l-4.016-4.008-1.234 1.234 4.926 4.935a1.75 1.75 0 0 0 2.398 0l4.926-4.935-1.234-1.234Z" /></svg>;
};
export default IconSortAscendingLarge;