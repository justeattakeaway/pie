import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCaretRightFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--caret-right-filled-large", className, size, "IconCaretRightFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m23.875 14.425-14-8.671A1.654 1.654 0 0 0 9 5.5a1.689 1.689 0 0 0-1.689 1.68v17.64a1.68 1.68 0 0 0 2.625 1.409l13.939-8.96a1.68 1.68 0 0 0 0-2.844Z" /></svg>;
};
export default IconCaretRightFilledLarge;