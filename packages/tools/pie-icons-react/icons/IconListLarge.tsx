import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconListLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--list-large", className, iconSize, "IconListLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M27.856 8.125H10.75v1.75h16.494l.612-1.75Z" /><path fill="#242E30" d="M5.5 24.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z" /><path fill="#242E30" d="M25.406 15.125H10.75v1.75h14.044l.612-1.75Z" /><path fill="#242E30" d="M27.506 22.125H10.75v1.75h16.222l.534-1.75Z" /><path fill="#242E30" d="M5.5 17.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z" /><path fill="#242E30" d="M5.5 10.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z" /></svg>;
};
export default IconListLarge;