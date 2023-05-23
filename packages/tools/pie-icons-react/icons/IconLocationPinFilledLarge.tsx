import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconLocationPinFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--location-pin-filled-large", className, iconSize, "IconLocationPinFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m21.6 23.735-1.435 1.435c1.96.455 2.835 1.067 2.835 1.33 0 .446-2.406 1.75-7 1.75-4.594 0-7-1.304-7-1.75 0-.262.875-.875 2.835-1.33L10.4 23.735c-1.811.551-3.15 1.453-3.15 2.765 0 2.406 4.533 3.5 8.75 3.5 4.218 0 8.75-1.094 8.75-3.5 0-1.313-1.339-2.214-3.15-2.765Z" /><path fill="#242E30" d="m16 26.859 7.254-7.254a10.256 10.256 0 1 0-14.508 0L16 26.859Zm0-16.984a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Z" /></svg>;
};
export default IconLocationPinFilledLarge;