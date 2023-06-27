import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFaceHappyLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--face-happy-large", className, size, "IconFaceHappyLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Zm-4.375-11.813a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Zm11.375 0a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Zm-4.288 3.938h1.847a4.717 4.717 0 0 1-9.118 0h1.846a2.975 2.975 0 0 0 5.425 0Z" /></svg>;
};
export default IconFaceHappyLarge;