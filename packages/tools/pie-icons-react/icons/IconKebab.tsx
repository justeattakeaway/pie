import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconKebab = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--kebab", className, iconSize, "IconKebab");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M13.25 2.531V1.22H2.75V2.53h4.594v1.313H5.97A1.969 1.969 0 0 0 4.01 6.03l.586 5.25a1.96 1.96 0 0 0 1.952 1.75h.796v1.094h1.312v-1.094h.796a1.96 1.96 0 0 0 1.952-1.75l.586-5.25a1.969 1.969 0 0 0-1.96-2.187H8.656V2.53h4.594Zm-3.22 2.625a.656.656 0 0 1 .656.727l-.061.638-1.82-.332v1.338l1.662.298-.175 1.593-1.487-.272v1.33l1.348.245-.053.412a.656.656 0 0 1-.647.586H6.548a.657.657 0 0 1-.648-.586L5.716 9.47l1.479-.42V7.685l-1.628.464-.253-2.266a.656.656 0 0 1 .656-.727h4.06Z" /></svg>;
};
export default IconKebab;