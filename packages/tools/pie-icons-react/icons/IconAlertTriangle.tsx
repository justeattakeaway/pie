import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconAlertTriangle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--alert-triangle", className, iconSize, "IconAlertTriangle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8.656 5.375H7.344V8h1.312V5.375Z" /><path fill="#242E30" d="M8 10.625a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z" /><path fill="#242E30" d="M13.408 13.031H2.591a1.496 1.496 0 0 1-1.33-.796 1.593 1.593 0 0 1 .044-1.61l5.408-8.662A1.505 1.505 0 0 1 8 1.219a1.505 1.505 0 0 1 1.286.726l5.408 8.68a1.593 1.593 0 0 1 0 1.627 1.496 1.496 0 0 1-1.287.78ZM8 2.531a.192.192 0 0 0-.175.105l-5.408 8.671a.297.297 0 0 0 0 .298.2.2 0 0 0 .184.114h10.806a.2.2 0 0 0 .184-.114.297.297 0 0 0 0-.298l-5.416-8.67A.192.192 0 0 0 8 2.53Z" /></svg>;
};
export default IconAlertTriangle;