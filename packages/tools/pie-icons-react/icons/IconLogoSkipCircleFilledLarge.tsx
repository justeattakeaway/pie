import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLogoSkipCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--skip-circle-filled-large", className, iconSize, "IconLogoSkipCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" fillRule="evenodd" d="M28.5 16.25a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-11.841-3.284c-.078.478.257.912.779 1.522l.114.132c.65.748 1.629 1.876 1.577 3.29-.04.589-.2 1.163-.47 1.687-1.08 2.053-2.901 2.903-5.007 2.903-1.423 0-2.652-.657-2.652-.657l.08-.288.626-2.25a.355.355 0 0 1 .23-.238c.116-.04.252.027.325.063l.063.03c.478.237.766.38 1.665.38.592 0 1.301-.3 1.448-1.208.088-.523-.273-.974-.787-1.555l-.063-.07-.001-.003c-.712-.825-1.685-1.954-1.427-3.554C13.53 10.862 15.78 9 18.25 9a4.033 4.033 0 0 1 1.709.352l.02.01.068.032.453.222-.656 2.334a.348.348 0 0 1-.498.209 11.178 11.178 0 0 1-.165-.084c-.346-.178-.593-.305-1.286-.305-.726 0-1.14.601-1.235 1.196Z" clipRule="evenodd" /></svg>;
};
export default IconLogoSkipCircleFilledLarge;