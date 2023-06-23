import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSortAscending = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--sort-ascending", className, iconSize, "IconSortAscending");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M1 7.344h6.816l-.551 1.312H1V7.344Zm8.286-3.5H1v1.312h7.735l.551-1.312ZM1 12.156h4.786l.56-1.312H1v1.312Zm12.994-2.502L12.156 11.5V6.25h-1.312v5.25L9.006 9.654l-.927.971 2.625 2.625a1.075 1.075 0 0 0 1.54 0l2.625-2.625-.875-.971Z" /></svg>;
};
export default IconSortAscending;