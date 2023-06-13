import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCaretDownFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--caret-down-filled-large", className, iconSize, "IconCaretDownFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M24.82 8.169H7.18a1.671 1.671 0 0 0-1.409 2.625l8.96 13.956a1.679 1.679 0 0 0 2.844 0l8.671-14a1.672 1.672 0 0 0-1.426-2.581Z" /></svg>;
};
export default IconCaretDownFilledLarge;