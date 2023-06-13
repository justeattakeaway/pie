import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBarcode = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--barcode", className, iconSize, "IconBarcode");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M3.188 12.375H1.875V2.75h1.313v9.625Zm10.5-9.625h-1.313v9.625h1.313V2.75Zm-2.626 0H9.75v7.875h1.313V2.75Zm-2.624 0H7.125v7.875h1.313V2.75Zm-2.626 0H4.5v7.875h1.313V2.75Z" /></svg>;
};
export default IconBarcode;