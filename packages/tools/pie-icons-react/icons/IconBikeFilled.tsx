import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBikeFilled = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--bike-filled", className, size, "IconBikeFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M12.138 7.405 11.01 4.159c0-.114 0-.228.167-.28l1.198-.447v-1.4l-1.627.613a1.523 1.523 0 0 0-.998 1.934l.36 1.015h-.36a2.433 2.433 0 0 0-1.925.962l-1.207 1.61-1.059-2.135h.691V4.72h-3.5V6.03h1.348l.717 1.461a2.87 2.87 0 0 0-.735-.105 2.826 2.826 0 1 0 2.827 2.818v-.201l1.968-2.66a1.111 1.111 0 0 1 .875-.438h.832l.253.718a2.844 2.844 0 1 0 1.313-.219h-.009Z" /></svg>;
};
export default IconBikeFilled;