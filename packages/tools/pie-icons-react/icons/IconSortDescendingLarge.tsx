import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSortDescendingLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--sort-descending-large", className, iconSize, "IconSortDescendingLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M18.033 22.91H2v1.75h16.768l-.735-1.75ZM2 10.66h10.87l.735 1.75H2v-1.75Zm0 6.125h13.451l.735 1.75H2v-1.75Zm25.896-3.141-4.017-4.078V21.16h-1.75V9.636l-4.017 4.008-1.234-1.234 4.927-4.935a1.75 1.75 0 0 1 2.398 0l4.927 4.935-1.234 1.234Z" /></svg>;
};
export default IconSortDescendingLarge;