import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowUp = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--arrow-up", className, size, "IconArrowUp");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M8.656 14.125V3.931l3.29 3.29.928-.927L8.77 2.199a1.085 1.085 0 0 0-1.54 0L3.126 6.294l.928.927 3.29-3.29v10.194h1.312Z" /></svg>;
};
export default IconArrowUp;