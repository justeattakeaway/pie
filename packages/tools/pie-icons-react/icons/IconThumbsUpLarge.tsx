import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconThumbsUpLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--thumbs-up-large", className, iconSize, "IconThumbsUpLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M28.302 16a2.625 2.625 0 0 0-1.68-1.26l-4.76-1.146.98-4.891A3.413 3.413 0 0 0 19.5 4.625h-.534l-5.18 10.071a.876.876 0 0 1-.743.429H3.75v1.75h6.886a14.997 14.997 0 0 0-.761 4.813 9.976 9.976 0 0 0 .7 3.937H3.75v1.75h18.664A4.374 4.374 0 0 0 26.5 24.61l2.047-6.554A2.625 2.625 0 0 0 28.302 16Zm-1.443 1.558-2.022 6.474a2.625 2.625 0 0 1-2.423 1.593H12.5a8.207 8.207 0 0 1-.875-3.938c-.03-1.646.267-3.282.875-4.812h.516a2.626 2.626 0 0 0 2.275-1.321l4.681-9.1c.31.09.585.274.788.525a1.678 1.678 0 0 1 .341 1.382l-1.312 6.545 6.405 1.514a.875.875 0 0 1 .56.42.876.876 0 0 1 .105.691v.027Z" /></svg>;
};
export default IconThumbsUpLarge;