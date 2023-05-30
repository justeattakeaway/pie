import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPinAtHomeFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--pin-at-home-filled", className, iconSize, "IconPinAtHomeFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8.875 2.304a1.75 1.75 0 0 0-1.75.008 42.972 42.972 0 0 0-5.819 4.813l.91.875s.298-.289.753-.7v6.571H13.03V7.335c.455.411.744.691.753.7l.875-.945a42.875 42.875 0 0 0-5.784-4.786Zm-3.5 8.321a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm2.625 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm2.625 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Z" /></svg>;
};
export default IconPinAtHomeFilled;