import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowDownCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--arrow-down-circle", className, iconSize, "IconArrowDownCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M7.344 1.577v7.167L5.445 6.845l-.945.928 2.713 2.712a1.084 1.084 0 0 0 1.54 0L11.5 7.773l-.945-.928-1.899 1.899V1.577H7.344Z" /><path d="M9.969 1.315V2.75a5.46 5.46 0 1 1-3.938 0V1.315a6.781 6.781 0 1 0 3.938 0Z" /></svg>;
};
export default IconArrowDownCircle;