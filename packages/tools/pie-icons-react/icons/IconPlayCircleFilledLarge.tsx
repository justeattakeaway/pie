import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPlayCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--play-circle-filled-large", className, size, "IconPlayCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m20.043 16-6.633 3.456-.026-6.93L20.043 16Z" /><path fillRule="evenodd" d="M9.194 5.814a12.25 12.25 0 1 1 13.612 20.372A12.25 12.25 0 0 1 9.194 5.814Zm4.688 15.366 7.56-3.964A1.46 1.46 0 0 0 22.125 16a1.479 1.479 0 0 0-.7-1.234l-7.516-3.928a1.417 1.417 0 0 0-1.462-.088 1.46 1.46 0 0 0-.778 1.321v7.875a1.46 1.46 0 0 0 1.444 1.47c.274 0 .542-.083.77-.236Z" clipRule="evenodd" /></svg>;
};
export default IconPlayCircleFilledLarge;