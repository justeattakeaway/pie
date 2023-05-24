import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconMinusCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--minus-circle-filled", className, iconSize, "IconMinusCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.792 6.792 0 0 0 0-9.625Zm-1.391 5.451H4.596V7.344h6.808v1.312Z" /></svg>;
};
export default IconMinusCircleFilled;