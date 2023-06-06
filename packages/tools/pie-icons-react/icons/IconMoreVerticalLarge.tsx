import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconMoreVerticalLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--more-vertical-large", className, iconSize, "IconMoreVerticalLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M17.969 7.688a1.969 1.969 0 1 1-3.938 0 1.969 1.969 0 0 1 3.938 0ZM16 14.03a1.97 1.97 0 1 0 0 3.938 1.97 1.97 0 0 0 0-3.938Zm0 8.313a1.969 1.969 0 1 0 0 3.938 1.969 1.969 0 0 0 0-3.938Z" /></svg>;
};
export default IconMoreVerticalLarge;