import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconHandCoinsLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--hand-coins-large", className, iconSize, "IconHandCoinsLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M28.11 18.975a4.445 4.445 0 0 0-5.565.245l-2.538 2.258a2.625 2.625 0 0 1-1.75.647h-.507a4.375 4.375 0 0 0 .875-2.625v-1.75h-5.119a7 7 0 0 0-3.867 1.164L6.113 21.25H2.874V23H5.5v4.375H2.875v1.75h16.817a4.376 4.376 0 0 0 3.256-1.453l6.684-7.428-1.522-1.269ZM21.644 26.5a2.626 2.626 0 0 1-1.951.875H7.25v-4.777l3.351-2.223a5.25 5.25 0 0 1 2.905-.875h3.369a2.625 2.625 0 0 1-2.625 2.625h-.779l-.875 1.75h5.688a4.375 4.375 0 0 0 2.887-1.085l2.529-2.258a2.695 2.695 0 0 1 3.334-.157l.087.07-5.477 6.055Zm.481-10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm-7.438 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z" /></svg>;
};
export default IconHandCoinsLarge;