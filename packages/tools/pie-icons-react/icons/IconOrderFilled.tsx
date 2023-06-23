import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconOrderFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--order-filled", className, iconSize, "IconOrderFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v10.64l3.193-1.444a.202.202 0 0 1 .176 0L8 13.967l2.537-1.146a.202.202 0 0 1 .175 0l3.194 1.444V3.625a1.54 1.54 0 0 0-1.531-1.531Zm-1.75 4.812h-5.25V5.594h5.25v1.312ZM9.75 9.531h-3.5V8.22h3.5V9.53Z" /></svg>;
};
export default IconOrderFilled;