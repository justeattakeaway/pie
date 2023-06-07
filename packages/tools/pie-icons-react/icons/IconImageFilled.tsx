import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconImageFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--image-filled", className, iconSize, "IconImageFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M1.219 2.219V14.03H14.78V2.22H1.22Zm12.25 1.312V7.82A2.756 2.756 0 0 1 12.2 9.48c-1.75 1.103-2.922.525-4.375-.192-1.453-.718-3.063-1.514-5.25-.525v-5.25l10.894.017ZM10.188 9a2.187 2.187 0 1 0 0-4.375 2.187 2.187 0 0 0 0 4.375Z" /></svg>;
};
export default IconImageFilled;