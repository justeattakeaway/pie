import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSoundOnFilled = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--sound-on-filled", className, size, "IconSoundOnFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="m11.5 1.219-.193.183A21.624 21.624 0 0 1 9.348 3.1a23.625 23.625 0 0 1-2.406 1.619H4.5A1.54 1.54 0 0 0 2.969 6.25v3.5A1.54 1.54 0 0 0 4.5 11.281h2.441c.837.487 1.64 1.028 2.407 1.619a22.87 22.87 0 0 1 1.986 1.697l.192.184h1.505V1.22H11.5Z" /></svg>;
};
export default IconSoundOnFilled;