import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconNavigationExpand = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--navigation-expand", className, iconSize, "IconNavigationExpand");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M1.93 2.373V13.45h8.64a3.323 3.323 0 0 0 3.322-3.322V2.373H1.93Zm1.33 1.33h3.1v8.417h-3.1V3.703Zm9.303 6.424a1.994 1.994 0 0 1-1.994 1.993H7.69V3.703h4.874v6.424Z" /><path d="m8.797 9.666 2.605-1.826-2.605-1.674" /></svg>;
};
export default IconNavigationExpand;