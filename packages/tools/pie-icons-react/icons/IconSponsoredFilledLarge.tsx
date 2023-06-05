import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSponsoredFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--sponsored-filled-large", className, iconSize, "IconSponsoredFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M24.75 4.625H7.25A2.625 2.625 0 0 0 4.625 7.25v17.5a2.625 2.625 0 0 0 2.625 2.625h17.5a2.625 2.625 0 0 0 2.625-2.625V7.25a2.625 2.625 0 0 0-2.625-2.625Zm-4.375 14h-1.75v-4.944l-3.754 3.754a2.255 2.255 0 0 0 0 3.194L13.63 21.87a4.026 4.026 0 0 1 0-5.67L17.33 12.5H12.5v-1.75h6.563a1.313 1.313 0 0 1 1.312 1.313v6.562Z" /></svg>;
};
export default IconSponsoredFilledLarge;