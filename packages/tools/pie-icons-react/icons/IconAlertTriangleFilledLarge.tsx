import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconAlertTriangleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--alert-triangle-filled-large", className, size, "IconAlertTriangleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m28.582 21.731-10.5-16.817a2.432 2.432 0 0 0-4.147 0L3.435 21.73a2.573 2.573 0 0 0-.07 2.625A2.415 2.415 0 0 0 5.5 25.625h21a2.415 2.415 0 0 0 2.135-1.277 2.573 2.573 0 0 0-.053-2.617ZM16 21.906a1.53 1.53 0 1 1 0-3.061 1.53 1.53 0 0 1 0 3.061Zm.875-11.156v6.125h-1.75V10.75h1.75Z" /></svg>;
};
export default IconAlertTriangleFilledLarge;