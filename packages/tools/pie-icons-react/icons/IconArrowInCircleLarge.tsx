import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowInCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--arrow-in-circle-large", className, iconSize, "IconArrowInCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 3.75a12.25 12.25 0 0 0-11.961 9.625H5.84a10.5 10.5 0 1 1 0 5.25H4.04A12.25 12.25 0 1 0 16 3.75Z" /><path d="m19.141 16.875-4.165 4.165 1.234 1.234 5.04-5.04c.085-.083.161-.173.227-.272a1.75 1.75 0 0 0 0-1.925 1.7 1.7 0 0 0-.227-.27l-5.04-5.04-1.234 1.233 4.165 4.165H2.875v1.75h16.266Z" /></svg>;
};
export default IconArrowInCircleLarge;