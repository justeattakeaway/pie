import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconVision = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--vision", className, iconSize, "IconVision");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M14.379 4.01a3.8 3.8 0 0 0-2.284-1.872 2.992 2.992 0 0 0-2.345.27c-.205.122-.396.265-.569.43l-6.43 4.935a1.19 1.19 0 0 0-.325 1.513v.053l-.962.499L2.068 11l.988-.507a1.19 1.19 0 0 0 1.007.586.875.875 0 0 0 .262 0l1.715-.455-1.33 3.5H6.12l1.33-3.5 1.33 3.5h1.409l-1.558-4.06 3.815-.875c.306-.058.6-.16.875-.306A3.605 3.605 0 0 0 14.38 4.01ZM4.159 9.75l-.534-.997 4.568-3.5a3.999 3.999 0 0 0 .49 2.012c.27.475.634.892 1.067 1.225L4.16 9.75Zm8.496-2.012a1.671 1.671 0 0 1-1.339.148A2.468 2.468 0 0 1 9.83 6.644a2.275 2.275 0 0 1 .577-3.089c.25-.146.534-.222.823-.219.174.003.347.027.516.07A2.572 2.572 0 0 1 13.25 4.64a2.284 2.284 0 0 1-.595 3.089v.009Z" /></svg>;
};
export default IconVision;