import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconNoteLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--note-large", className, iconSize, "IconNoteLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M22.125 23H3.75v1.75h18.375V23Z" /><path fill="#242E30" d="M28.25 7.25H3.75V9h24.5V7.25Z" /><path fill="#242E30" d="M28.25 15.125H3.75v1.75h24.5v-1.75Z" /></svg>;
};
export default IconNoteLarge;