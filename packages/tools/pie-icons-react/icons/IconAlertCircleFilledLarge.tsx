import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconAlertCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--alert-circle-filled-large", className, size, "IconAlertCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm-1.313 17.063a1.313 1.313 0 1 1 2.626 0 1.313 1.313 0 0 1-2.625 0Zm2.022-3.063H15.29l-.744-7.639a4.586 4.586 0 0 1 2.905 0l-.743 7.639Z" /></svg>;
};
export default IconAlertCircleFilledLarge;