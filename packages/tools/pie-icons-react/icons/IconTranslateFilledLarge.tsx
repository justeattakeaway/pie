import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconTranslateFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--translate-filled-large", className, iconSize, "IconTranslateFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm-.079 15.461a11.906 11.906 0 0 1-2.292-1.461 11.997 11.997 0 0 1-3.5 2.065l-.534-1.383c1.08-.4 2.088-.973 2.984-1.697a10.253 10.253 0 0 1-1.287-1.671l1.208-.814a9.79 9.79 0 0 0 1.094 1.409 8.148 8.148 0 0 0 1.592-2.721h-5.74V11.45h3.5v-.875h1.479v.875h3.5v1.488h-1.172A9.275 9.275 0 0 1 15.72 15.3c-.302.483-.644.94-1.024 1.365.545.443 1.131.832 1.75 1.164l-.525 1.382Zm6.125 2.223-.192-.49-.306-.788h-3.08l-.5 1.278h-1.487l.193-.49.472-1.173.35-.875.21-.516 1.05-2.712v.052l.455-1.129h1.619l2.756 6.825-1.54.018Z" /><path fill="#242E30" d="m19.483 17.531-.35.91-.193.482h2.152l-1.076-2.748-.533 1.356Z" /></svg>;
};
export default IconTranslateFilledLarge;