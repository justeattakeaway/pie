import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconRoutePinLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--route-pin-large", className, size, "IconRoutePinLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M26.631 6.375A8.848 8.848 0 0 0 14.12 18.887l6.256 6.222 6.256-6.257a8.864 8.864 0 0 0 0-12.477Zm-1.233 11.244-5.023 5.022-5.023-5.022a7.097 7.097 0 1 1 10.046 0Zm-5.023-8.742a3.85 3.85 0 1 0 0 7.701 3.85 3.85 0 0 0 0-7.7Zm0 5.942a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM8.895 26.5l13.23.061v1.75L8.886 28.25a2.73 2.73 0 0 1-2.38-1.4 2.537 2.537 0 0 1 .079-2.625l2.196-3.5a.796.796 0 0 0 0-.831.954.954 0 0 0-.875-.481H2v-1.75h5.941a2.73 2.73 0 0 1 2.398 1.39 2.52 2.52 0 0 1-.079 2.626l-2.188 3.5a.77.77 0 0 0 0 .822.962.962 0 0 0 .823.499Z" /></svg>;
};
export default IconRoutePinLarge;