import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconMinusCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--minus-circle-large", className, iconSize, "IconMinusCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M9.814 15.125v1.75h12.372v-1.75H9.814Z" /><path fill="#242E30" d="M24.663 7.338A12.25 12.25 0 1 0 7.339 24.663 12.25 12.25 0 0 0 24.663 7.338Zm-1.234 16.09A10.5 10.5 0 1 1 8.605 8.555 10.5 10.5 0 0 1 23.43 23.43Z" /></svg>;
};
export default IconMinusCircleLarge;