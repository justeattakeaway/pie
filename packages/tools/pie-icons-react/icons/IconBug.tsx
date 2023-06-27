import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBug = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--bug", className, size, "IconBug");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="m12.156 5.83 1.969-1.243V3.03L11.5 4.719h-.245a3.273 3.273 0 0 0-6.423 0h-.288L1.875 3.03v1.557L3.844 5.83v1.514H1v1.312h2.844v1.514l-1.969 1.242v1.558l2.109-1.339a4.139 4.139 0 0 0 8.032 0l2.109 1.339v-1.558l-1.969-1.242V8.656H15V7.344h-2.844V5.83ZM8 3.406A1.96 1.96 0 0 1 9.846 4.72H6.154A1.96 1.96 0 0 1 8 3.406Zm2.844 7.219a2.844 2.844 0 0 1-5.688 0V6.031h5.688v4.594Z" /></svg>;
};
export default IconBug;