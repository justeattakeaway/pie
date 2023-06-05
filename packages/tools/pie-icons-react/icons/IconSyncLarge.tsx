import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSyncLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--sync-large", className, iconSize, "IconSyncLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M19.762 4.056 18.1 5.72a10.403 10.403 0 0 1 5.32 2.852 10.499 10.499 0 0 1 0 14.875l-1.234-1.234A8.751 8.751 0 0 0 18.205 7.54l1.557 1.557-1.242 1.243-3.141-3.142a.875.875 0 0 1 0-1.242l3.14-3.141 1.243 1.242Zm-9.948 18.13a8.697 8.697 0 0 0 3.98 2.275l-1.557-1.557 1.243-1.243 3.141 3.141a.874.874 0 0 1 0 1.243l-3.141 3.141-1.243-1.242L13.9 26.28A10.5 10.5 0 0 1 8.57 8.571l1.243 1.243a8.75 8.75 0 0 0 0 12.372Z" /></svg>;
};
export default IconSyncLarge;