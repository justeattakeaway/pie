import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconNoodles = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--noodles", className, iconSize, "IconNoodles");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="m14.125 3.793-.942-.83-3.59 3.762L11.35 2.34l-1.2-.465-1.593 4.011A3.191 3.191 0 0 0 7.11 4.788a3.299 3.299 0 0 0-1.832-.147 3.234 3.234 0 0 0-1.613.852c-.44.431-.741.978-.865 1.573h-.925V9.35c0 .807.258 1.595.736 2.256a4.047 4.047 0 0 0 1.937 1.44l.257 1.079h5.705l.257-1.08a4.047 4.047 0 0 0 1.937-1.44 3.854 3.854 0 0 0 .736-2.255V7.066h-2.425l3.11-3.273ZM5.945 5.82c.396 0 .783.12 1.107.344.324.223.568.538.7.902H4.137c.13-.364.375-.679.699-.902a1.96 1.96 0 0 1 1.108-.344Zm6.21 3.53a2.639 2.639 0 0 1-.587 1.646c-.378.47-.907.806-1.503.953l-.377.1-.197.83H5.824l-.197-.83-.377-.1a2.784 2.784 0 0 1-1.504-.953A2.64 2.64 0 0 1 3.16 9.35V8.31h8.995V9.35Z" /></svg>;
};
export default IconNoodles;