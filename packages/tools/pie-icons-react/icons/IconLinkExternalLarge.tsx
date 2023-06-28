import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLinkExternalLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--link-external-large", className, size, "IconLinkExternalLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M26.5 6.734v5.889h1.75V5.5a1.529 1.529 0 0 0 0-.35 1.75 1.75 0 0 0-1.4-1.4 1.532 1.532 0 0 0-.35 0h-7.122V5.5h5.888l-9.625 9.625-1.864 1.855 1.243 1.242 1.855-1.846L26.5 6.734Z" /><path d="M24.872 15.598v6.124a3.911 3.911 0 0 1-3.902 3.903H10.269a3.911 3.911 0 0 1-3.894-3.894V11.03a3.911 3.911 0 0 1 3.894-3.902h6.125v-1.75h-6.125a5.696 5.696 0 0 0-5.644 5.652v10.701a5.687 5.687 0 0 0 5.688 5.688H20.97a5.696 5.696 0 0 0 5.688-5.688v-6.125l-1.786-.008Z" /></svg>;
};
export default IconLinkExternalLarge;