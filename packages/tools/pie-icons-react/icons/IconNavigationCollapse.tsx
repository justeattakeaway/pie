import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconNavigationCollapse = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--navigation-collapse", className, size, "IconNavigationCollapse");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M2.32 2.373V13.45h8.64a3.325 3.325 0 0 0 3.331-3.322V2.373H2.321Zm1.338 1.33h1.33v8.417h-1.33V3.703Zm9.304 6.424a1.994 1.994 0 0 1-1.994 1.993H6.317V3.703h6.645v6.424Z" /><path d="M11.793 9.666v-3.5L9.187 7.99l2.606 1.675Z" /></svg>;
};
export default IconNavigationCollapse;