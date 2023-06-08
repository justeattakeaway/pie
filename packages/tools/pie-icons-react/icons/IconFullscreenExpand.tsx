import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFullscreenExpand = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--fullscreen-expand", className, iconSize, "IconFullscreenExpand");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="m5.99 3.406.737-1.312H2.094v4.633l1.312-.738V3.406H5.99Z" /><path d="M10.01 3.406h2.584V5.99l1.312.738V2.094H9.273l.738 1.312Z" /><path d="M12.594 10.01v2.584H10.01l-.738 1.312h4.633V9.273l-1.312.738Z" /><path d="m3.406 10.01-1.312-.737v4.633h4.633l-.738-1.312H3.406V10.01Z" /></svg>;
};
export default IconFullscreenExpand;