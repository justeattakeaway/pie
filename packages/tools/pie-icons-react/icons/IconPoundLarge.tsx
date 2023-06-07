import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPoundLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--pound-large", className, iconSize, "IconPoundLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m19.29 19.281 1.523.517c-.333 1.338-1.4 1.89-2.827 1.89h-6.545v-1.54h1.138v-3.675H11.44v-1.435h1.138v-1.602c0-2.441 1.365-3.911 3.876-3.911a4.121 4.121 0 0 1 3.185 1.286l-1.102 1.12a2.737 2.737 0 0 0-2.083-.875c-1.339 0-2.144.683-2.144 2.302v1.68h3.763v1.434H14.31v3.675h3.631a1.251 1.251 0 0 0 1.348-.866ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z" /></svg>;
};
export default IconPoundLarge;