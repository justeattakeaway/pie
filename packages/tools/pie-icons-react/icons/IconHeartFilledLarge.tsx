import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconHeartFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--heart-filled-large", className, iconSize, "IconHeartFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 27.751 26.824 16.63a7.315 7.315 0 0 0 0-9.984 6.675 6.675 0 0 0-9.573 0L16 7.88l-1.277-1.225a6.668 6.668 0 0 0-9.573 0 7.315 7.315 0 0 0 0 9.984L16 27.75Z" /></svg>;
};
export default IconHeartFilledLarge;