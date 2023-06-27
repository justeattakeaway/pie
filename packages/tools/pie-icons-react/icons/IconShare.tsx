import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconShare = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--share", className, size, "IconShare");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M12.322 9.076a2.371 2.371 0 0 0-1.907.963L6.04 8.376a2.625 2.625 0 0 0 0-.376 2.625 2.625 0 0 0 0-.376l4.375-1.663a2.371 2.371 0 1 0-.481-1.417 1.68 1.68 0 0 0 0 .192L5.462 6.434a2.362 2.362 0 0 0-1.75-.823 2.389 2.389 0 1 0 0 4.778 2.362 2.362 0 0 0 1.75-.823l4.498 1.698a1.68 1.68 0 0 0 0 .192 2.39 2.39 0 1 0 2.389-2.38h-.027Zm0-5.608a1.076 1.076 0 1 1 0 2.152 1.076 1.076 0 0 1 0-2.152ZM3.678 9.076a1.076 1.076 0 1 1 0-2.152 1.076 1.076 0 0 1 0 2.152Zm8.646 3.457a1.076 1.076 0 1 1 .002-2.153 1.076 1.076 0 0 1-.002 2.153Z" /></svg>;
};
export default IconShare;