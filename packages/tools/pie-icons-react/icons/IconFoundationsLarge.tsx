import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFoundationsLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--foundations-large", className, iconSize, "IconFoundationsLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M4.625 27.375h10.509V16.866H4.625v10.509Zm1.75-8.759h7.009v7.009H6.375v-7.009Z" /><path fill="#242E30" d="M16.866 16.892v10.51h10.509v-10.51H16.866Zm8.759 8.76h-7.009v-7.01h7.009v7.01Z" /><path fill="#242E30" d="M10.75 4.625v10.509h10.509V4.625H10.75Zm1.75 8.759V6.375h7.009v7.009H12.5Z" /></svg>;
};
export default IconFoundationsLarge;