import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLocationTarget = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--location-target", className, iconSize, "IconLocationTarget");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M14.624 7.344h-1.636a5.05 5.05 0 0 0-4.332-4.332V1.376H7.344v1.636a5.049 5.049 0 0 0-4.332 4.375H1.376V8.7h1.636a5.049 5.049 0 0 0 4.375 4.331v1.636H8.7v-1.68a5.049 5.049 0 0 0 4.288-4.33h1.636V7.343ZM8 11.719A3.719 3.719 0 1 1 11.719 8 3.728 3.728 0 0 1 8 11.719ZM9.417 8A1.417 1.417 0 1 1 8 6.582 1.409 1.409 0 0 1 9.417 8Z" /></svg>;
};
export default IconLocationTarget;