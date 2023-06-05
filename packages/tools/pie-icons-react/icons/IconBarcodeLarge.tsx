import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBarcodeLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--barcode-large", className, iconSize, "IconBarcodeLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8.125 8.125v15.75h-1.75V8.125h1.75Zm15.75 0v15.75h1.75V8.125h-1.75ZM19.5 21.25h1.75V8.125H19.5V21.25Zm-4.375 0h1.75V8.125h-1.75V21.25Zm-4.375 0h1.75V8.125h-1.75V21.25Zm17.5-16.625H23v1.75h4.375v4.375h1.75V5.5a.875.875 0 0 0-.875-.875ZM2.875 5.5v5.25h1.75V6.375H9v-1.75H3.75a.875.875 0 0 0-.875.875Zm1.75 15.75h-1.75v5.25a.875.875 0 0 0 .875.875H9v-1.75H4.625V21.25Zm22.75 4.375H23v1.75h5.25a.875.875 0 0 0 .875-.875v-5.25h-1.75v4.375Z" /></svg>;
};
export default IconBarcodeLarge;