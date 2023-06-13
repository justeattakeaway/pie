import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCheckboxSelectedLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--checkbox-selected-large", className, iconSize, "IconCheckboxSelectedLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M24.75 27.375H7.25a2.633 2.633 0 0 1-2.625-2.625V7.25A2.633 2.633 0 0 1 7.25 4.625h17.5a2.633 2.633 0 0 1 2.625 2.625v17.5a2.633 2.633 0 0 1-2.625 2.625Zm-17.5-21a.878.878 0 0 0-.875.875v17.5c0 .481.394.875.875.875h17.5a.878.878 0 0 0 .875-.875V7.25a.878.878 0 0 0-.875-.875H7.25Zm6.79 14c.429 0 .84-.184 1.129-.499l6.72-7.245-1.287-1.19-6.57 7.079-2.495-2.809-1.312 1.164 2.66 3.001c.289.315.7.49 1.129.49l.026.009Z" /></svg>;
};
export default IconCheckboxSelectedLarge;