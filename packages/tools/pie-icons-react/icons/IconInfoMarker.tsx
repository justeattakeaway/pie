import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconInfoMarker = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--info-marker", className, iconSize, "IconInfoMarker");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M12.281 1h-8.75A1.54 1.54 0 0 0 2 2.531v7.875a1.54 1.54 0 0 0 1.531 1.531H5.16l2.747 2.748 2.748-2.748h1.627a1.54 1.54 0 0 0 1.531-1.53V2.53A1.54 1.54 0 0 0 12.283 1Zm.219 9.406a.218.218 0 0 1-.219.219h-2.17L7.906 12.83l-2.205-2.205h-2.17a.218.218 0 0 1-.219-.219V2.531a.219.219 0 0 1 .22-.219h8.75a.219.219 0 0 1 .218.22v7.874ZM7.25 6.197h1.313v3.334H7.25V6.197Zm1.531-1.916a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z" /></svg>;
};
export default IconInfoMarker;