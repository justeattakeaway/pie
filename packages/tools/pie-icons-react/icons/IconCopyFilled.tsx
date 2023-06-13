import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCopyFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--copy-filled", className, iconSize, "IconCopyFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_1597_575)"><path d="M13.795 1.627a1.345 1.345 0 0 0-.862-.56L6.946 0a1.34 1.34 0 0 0-1 .233c-.291.208-.49.523-.552.878l-.07.639h3.874c.69.014 1.346.3 1.83.8.483.498.755 1.17.757 1.869v7.28c.21-.08.394-.215.536-.39.143-.175.237-.384.275-.608l1.424-8.076a1.363 1.363 0 0 0-.225-.998Z" /><path fillRule="evenodd" d="M9.198 14H3.159a1.32 1.32 0 0 1-.977-.394 1.357 1.357 0 0 1-.394-.989v-8.19a1.364 1.364 0 0 1 .389-.961 1.327 1.327 0 0 1 .948-.395h6.038a1.312 1.312 0 0 1 .948.395 1.35 1.35 0 0 1 .39.962v8.19c.006.358-.127.704-.371.963-.244.26-.58.41-.932.419ZM7.86 6.501H4.47v1.357h3.39V6.5ZM4.47 9.135h3.39v1.356H4.47V9.135Z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0_1597_575"><rect width={14} height={14} transform="translate(1)" /></clipPath></defs></svg>;
};
export default IconCopyFilled;