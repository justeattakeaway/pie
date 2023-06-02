import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconTutorial = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--tutorial", className, iconSize, "IconTutorial");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" fillRule="evenodd" d="m2.505 7.566.91.383v3.42l.263.201A7.194 7.194 0 0 0 8 12.996h.009a7.194 7.194 0 0 0 4.322-1.426l.263-.201V7.934l2.213-.931V5.795L8.254 3.04h-.508L1.184 5.804V7.01l.008.004v2.569h1.313V7.566Zm5.749 2.202H8.25L8 9.873l-.25-.105h-.004l-.979-.412L4.72 8.5v2.214l.009-.01a5.932 5.932 0 0 0 6.545 0V8.5l-3.02 1.267v.002Zm4.61-3.36L8 4.36 3.135 6.408l.28.117v-.004l4.594 1.925 4.856-2.038Z" clipRule="evenodd" /></svg>;
};
export default IconTutorial;