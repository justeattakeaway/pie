import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconArrowDownCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--arrow-down-circle-large", className, iconSize, "IconArrowDownCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M18.625 4.873v1.74c2.474.617 4.631 2.084 6.065 4.126a9.864 9.864 0 0 1 1.726 6.966c-.322 2.448-1.557 4.698-3.475 6.329A10.72 10.72 0 0 1 16 26.564c-2.556 0-5.024-.9-6.941-2.53-1.918-1.631-3.153-3.881-3.475-6.329A9.864 9.864 0 0 1 7.31 10.74c1.434-2.042 3.59-3.509 6.065-4.126v-1.74c-2.95.625-5.557 2.28-7.32 4.647A11.521 11.521 0 0 0 3.82 17.7c.326 2.898 1.75 5.579 3.997 7.526C10.066 27.173 12.98 28.25 16 28.25c3.02 0 5.934-1.077 8.182-3.025 2.248-1.947 3.671-4.628 3.997-7.526a11.52 11.52 0 0 0-2.233-8.179c-1.764-2.367-4.37-4.022-7.321-4.647Z" /><path fill="#242E30" d="m9.726 16.623 5.04 4.865c.328.315.772.492 1.234.492.462 0 .906-.177 1.234-.492l5.04-4.865-1.234-1.191-4.165 4.02V3.75h-1.75v15.703l-4.165-4.021-1.234 1.191Z" /></svg>;
};
export default IconArrowDownCircleLarge;