import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconMoreVertical = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--more-vertical", className, iconSize, "IconMoreVertical");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M9.313 3.188a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.625 0ZM8 6.688a1.313 1.313 0 1 0 0 2.625 1.313 1.313 0 0 0 0-2.626ZM8 11.5a1.313 1.313 0 1 0 0 2.625A1.313 1.313 0 0 0 8 11.5Z" /></svg>;
};
export default IconMoreVertical;