import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconEyeOnLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--eye-on-large", className, iconSize, "IconEyeOnLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M24.024 10.094a11.375 11.375 0 0 0-16.048 0L2.08 16l5.897 5.906a11.375 11.375 0 0 0 16.048 0L29.92 16l-5.897-5.906Zm-1.243 10.57a9.625 9.625 0 0 1-13.562 0L4.546 16l4.673-4.664a9.625 9.625 0 0 1 13.562 0L27.454 16l-4.673 4.664Zm-6.78-9.477A4.813 4.813 0 1 0 20.812 16 4.821 4.821 0 0 0 16 11.187Zm0 7.876A3.062 3.062 0 1 1 16 12.938a3.062 3.062 0 0 1 0 6.124Z" /></svg>;
};
export default IconEyeOnLarge;