import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCaretUp = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--caret-up", className, iconSize, "IconCaretUp");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M12.996 10.231 8.936 4.29a1.313 1.313 0 0 0-1.076-.577 1.313 1.313 0 0 0-1.085.612l-3.798 5.941a1.33 1.33 0 0 0 0 1.339 1.312 1.312 0 0 0 1.155.682h7.823a1.312 1.312 0 0 0 1.085-2.056h-.044Zm-8.907.744 3.771-5.95 4.051 5.95H4.09Z" /></svg>;
};
export default IconCaretUp;