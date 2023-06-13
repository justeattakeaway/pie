import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGeolocationCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--geolocation-circle", className, iconSize, "IconGeolocationCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M8 1.42a6.58 6.58 0 1 0 0 13.16A6.58 6.58 0 0 0 8 1.42Zm0 11.83a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5Z" /><path d="m4.351 8.28 1.33.332a2.345 2.345 0 0 1 1.75 1.75l.333 1.33h1.172l2.293-6.877L4.35 7.064V8.28Zm4.769-1.4-.761 2.284A3.649 3.649 0 0 0 6.836 7.64L9.12 6.88Z" /></svg>;
};
export default IconGeolocationCircle;