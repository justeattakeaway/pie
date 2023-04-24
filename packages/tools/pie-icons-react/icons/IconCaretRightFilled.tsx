import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCaretRightFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--caret-right-filled", className, iconSize, "IconCaretRightFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M11.675 6.749 5.734 2.978a1.304 1.304 0 0 0-.709-.228 1.304 1.304 0 0 0-1.313 1.313v7.822a1.321 1.321 0 0 0 .7 1.164c.189.1.4.151.613.149.265.002.525-.077.744-.228l5.941-4.06a1.286 1.286 0 0 0 .577-1.102 1.313 1.313 0 0 0-.612-1.06Z" /></svg>;
};
export default IconCaretRightFilled;