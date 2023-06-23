import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconAppRestaurant = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--app-restaurant", className, iconSize, "IconAppRestaurant");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M13.906 4.395a2.519 2.519 0 0 0-.796-1.829l-1.015-.971a1.374 1.374 0 0 0-.945-.376H4.867c-.346 0-.679.135-.927.376l-1.032.963a2.537 2.537 0 0 0-.814 1.846 2.529 2.529 0 0 0 .875 1.89v6.519a1.969 1.969 0 0 0 1.969 1.968h6.125a1.969 1.969 0 0 0 1.968-1.969V6.295a2.545 2.545 0 0 0 .875-1.899ZM3.8 3.52l1.067-.989h6.318l1.024.963a1.244 1.244 0 0 1 .385.875 1.19 1.19 0 0 1-.945 1.155 1.295 1.295 0 0 1-1.409-.578H9.102a1.295 1.295 0 0 1-2.205 0H5.76a1.295 1.295 0 0 1-1.409.578 1.19 1.19 0 0 1-.945-1.12A1.199 1.199 0 0 1 3.8 3.52Zm7.263 9.949H4.936a.665.665 0 0 1-.656-.656v-5.95A2.625 2.625 0 0 0 6.33 6.31a2.625 2.625 0 0 0 3.342 0 2.625 2.625 0 0 0 2.048.551v5.95a.665.665 0 0 1-.656.657ZM8.874 11.5a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z" /></svg>;
};
export default IconAppRestaurant;