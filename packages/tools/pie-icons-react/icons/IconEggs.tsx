import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconEggs = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--eggs", className, iconSize, "IconEggs");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M7.996 1.34c-3.163 0-5.384 5.244-5.384 8.084s2.413 5.384 5.384 5.384a5.387 5.387 0 0 0 5.384-5.384c0-2.97-2.222-8.084-5.384-8.084Zm0 12.162a4.082 4.082 0 0 1-4.078-4.078c0-2.491 2.013-6.777 4.078-6.777 2.064 0 4.077 4.286 4.077 6.777a4.082 4.082 0 0 1-4.077 4.078Z" /><path fill="#242E30" d="M7.787 4.79c.627.644 1.228 1.62 1.68 2.735l1.212-.488c-.366-.897-1.002-2.178-1.952-3.162l-.932.915h-.008Z" /></svg>;
};
export default IconEggs;