import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPlayLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--play-large", className, iconSize, "IconPlayLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m8.807 8.361.088.044L23.192 16 8.895 23.595s0 .053-.079.07V8.361h-.009Zm.01-1.75a1.75 1.75 0 0 0-1.75 1.75v15.304a1.75 1.75 0 0 0 2.624 1.47l14.306-7.63a1.75 1.75 0 0 0 0-3.062L9.717 6.865a1.75 1.75 0 0 0-.918-.271l.017.017Z" /></svg>;
};
export default IconPlayLarge;